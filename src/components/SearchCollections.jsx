import { Select } from 'antd';
import { getCollectionsByChain } from "./Marketplace/collections";


function SearchCollections({setInputValue}){
    const { Option } = Select;
    const { chainId } = useMoralis();
    const NFTCollections = getCollectionsByChain(chainId);
    
    

    function onChange(value) {
        setInputValue(value);
    }

    return (
        <>
        <Select
            showSearch
            style={{width: "1000px",
                    marginLeft: "20px" }}
            placeholder="Find a Collection"
            optionFilterProp="children"
            onChange={onChange}
        >   
        {NFTCollections && 
            NFTCollections.map((collection, i) => 
            <Option value={collection.addrs} key= {i}>{collection.name}</Option>
            )
            }   
        </Select>
            
        </>
    )
}
export default SearchCollections;
