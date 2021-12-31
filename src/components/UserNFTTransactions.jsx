import React from "react";
import Text from "antd/lib/typography/Text";
import { useMoralis, useMoralisQuery } from "react-moralis";
import { Button, Table, Tag, Space } from "antd";
import moment from "moment";
import { createdMarketItemsTable } from "../MarketplaceSCMetadata";
import { brightFontCol, TopBtnDiv, BtnPrimary } from "../GlobalStyles";
import { DatabaseOutlined, LeftOutlined } from "@ant-design/icons";

const styles = {
    table: {
        margin: "0 auto",
        width: "1000px",
    },
};

function UserNFTTransactions() {
    const { account } = useMoralis();
    const walletAddress = account
    const queryMarketItems = useMoralisQuery(createdMarketItemsTable);
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
            a.updatedAt < b.updatedAt ? 1 : b.updatedAt < a.updatedAt ? -1 : 0
        );

    const columns = [
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
        },
        {
            title: "TokenID",
            key: "item",
            render: (text, record) => (
                <Space size="middle">
                    <span>#{record.item}</span>
                </Space>
            ),
        },
        {
            title: "TokenContract",
            key: "item",
            render: (text, record) => (
                <Space size="middle">
                    <span>{record.collection}</span>
                </Space>
            ),
        },
        {
            title: "Amount",
            key: "item",
            render: (text, record) => (
                <Space size="middle">
                    <span>1</span>
                </Space>
            ),
        },
        {
            title: "Transaction Status",
            key: "tags",
            dataIndex: "tags",
            render: (tags) => (
                <>
                    {tags.map((tag) => {
                        let color = "geekblue";
                        let status = "BUY";
                        if (tag === false) {
                            color = "volcano";
                            status = "waiting";
                        } else if (tag === true) {
                            color = "green";
                            status = "confirmed";
                        }
                        if (tag === walletAddress) {
                            status = "SELL";
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {status.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: "Price",
            key: "price",
            dataIndex: "price",
            render: (e) => (
                <Space size="middle">
                    <span>{e}</span>
                </Space>
            ),
        }
    ];

    const data = fetchMarketItems?.map((item, index) => ({
        key: index,
        date: moment(item.updatedAt).format("DD-MM-YYYY HH:mm"),
        collection: item.nftContract,
        item: item.tokenId,
        tags: [item.seller, item.sold],
        price: item.price / ("1e" + 18)
    }));

    return (
        <>
            <div style={{
                ...TopBtnDiv,
                marginLeft: "20.4%",
                marginBottom: "3rem",
            }}>
                <Button
                    type="primary"
                    style={BtnPrimary}
                    onClick={() => window.history.back()}
                >
                    <LeftOutlined />Back
                </Button>
            </div>
            <div style={{
                fontFamily: "Source Serif Pro",
                fontSize: "27px",
                fontWeight: "bold",
                flexBasis: "100%",
                height: "0px",
                marginLeft: "43%",
                marginBottom: "4rem",
                color: brightFontCol,
            }}>
                <Text strong>
                    <h3><DatabaseOutlined /> Your recent transactions</h3>
                </Text>
            </div>
            <div style={styles.table}>
                <Table columns={columns} dataSource={data} />
            </div>
        </>
    );
}

export default UserNFTTransactions;

