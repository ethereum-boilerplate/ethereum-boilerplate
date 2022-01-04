import { Select } from 'antd'
import { useMoralisDapp } from 'providers/MoralisDappProvider/MoralisDappProvider'
import { getCollectionsByChain } from 'helpers/collections'

function SearchCollections() {
    const { Option } = Select;
    const { chainId } = useMoralisDapp();
    const NFTCollections = getCollectionsByChain(chainId);

    return(
        <>
        <Select
            showSearch
            style={{width: "1080px", marginLeft: "20px"}}
            placeholder="Find a Collection"
            optionFilterProp="Children"
        >
        {NFTCollections && NFTCollections.map((collection, i) =>
        <Option value={collection.addrs} key={i}>Collection Name</Option>
        )}


        </Select>
        </>
    )
}

export default SearchCollections