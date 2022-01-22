import React, { useState } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import { Table, Tag, Space } from "antd";
import moment from "moment";

const styles = {
    table: {
        margin: "0 auto",
        width: "1000px",
    },
};
function NFTMarketTransactions() {
    const { walletAddress } = useMoralisDapp();
    const queryItemImages = useMoralisQuery("ItemImages");
    const fetchItemImages = JSON.parse(
        JSON.stringify(queryItemImages.data, [
            "nftContract",
            "tokenId",
            "name",
            "image",
        ])
    );
    const queryMarketItems = useMoralisQuery("CreatedMarketItems");
    const fetchMarketItems = JSON.parse(
    JSON.stringify(queryMarketItems.data, [
      "updatedAt",
      "price",
      "nftContract",
      "itemId",
      "sold",
      "tokenId",
      "seller",
      "owner",
    ])
    )
    .filter(
        (item) => item.seller === walletAddress || item.owner === walletAddress
    )
    .sort((a, b) =>
        a.updatedAt < b.updatesAt ? 1 : b.updatedAt < a.updated ? -1 : 0
    );

    function getImage(addrs, id) {
        const img = fetchItemImages.find(
            (element) =>
            element.nftContract === addrs &&
            element.tokenId === id
        );
        return img?.image;
    }

    function getName(addrs, id) {
        const name = fetchItemImages.find(
            (element) =>
            element.nftContract === addrs &&
            element.tokenId === id
        );
        return name?.name;
    }

    const data = fetchMarketItems?.map((item, index) => ({
        key: index,
        date: moment(item.updatedAt).format("DD-MM-YYYY MM:mm"),
        collection: item.nftContract, 
        item: item.tokenId,
        tags: [item.seller, item.sold],
        price: item.price / ("1e" + 18)
    }));

    const columns = [
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
        },
        {
            title: "Item",
            key: "item",
            render: (text, record) => (
                <Space size="middle">
                    <img src={getImage(record.collection, record.item)} style={{width: "40px", borderRadius:"4px"}} />
                    <span>#{record.item}</span>

                </Space>
            ),
        },
        {
            title: "Collection",
            key: "collection",
            render: (text, record) => (
                <Space size="middle">
                    <span>{getName(record.collection, record.item)}</span>
                </Space>
            ),
        },
        {
            title: "Transaction Status",
            key: "tags",
            dataIndex: "tags",
            render: (tags) => {
                <>
                    {tags.map((tag) => {
                        let color = "geekblue";
                        let status = "BUY";
                        if(tag === false) {
                            color = "volcano";
                            status = "Waiting";
                        } else if (tag === true) {
                            color = "green";
                            status = "confirmed";
                        }
                        if (tag === walletAddress) {
                            status = "SELL";
                        }
                        return (
                            <tag color={color} key={tag} >
                                {status.toUpperCase()}
                            </tag>
                        )
                    })}
                </>
            }
        },
        {
            title: "Price",
            key: "price",
            dataIndex: "price",
        }
    ];

    return(
    <>
        <div>
            <div style={styles.table}>
                <Table columns={columns} dataSource={data}/>
            </div>
        </div>
    </>
    );
}

export default NFTMarketTransactions;