import {
  useMoralis,
  useERC20Balances,
  UseERC20BalancesParams,
} from "react-moralis";
import { Skeleton, Table } from "antd";
import { getEllipsisTxt } from "../helpers/formatters";
import { FC } from "react";

interface ERC20BalancesProps {
  params?: UseERC20BalancesParams;
}

const ERC20Balances: FC<ERC20BalancesProps> = ({ params }) => {
  const { data: assets } = useERC20Balances(params);
  const { Moralis } = useMoralis();

  const columns = [
    {
      title: "",
      dataIndex: "logo",
      key: "logo",
      render: (logo: any) => (
        <img
          src={logo || "https://etherscan.io/images/main/empty-token.png"}
          alt="nologo"
          width="28px"
          height="28px"
        />
      ),
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name: any) => name,
    },
    {
      title: "Symbol",
      dataIndex: "symbol",
      key: "symbol",
      render: (symbol: any) => symbol,
    },
    {
      title: "Balance",
      dataIndex: "balance",
      key: "balance",
      render: (value: any, item: any) =>
        parseFloat(Moralis?.Units?.FromWei(value, item.decimals)).toFixed(6),
    },
    {
      title: "Address",
      dataIndex: "token_address",
      key: "token_address",
      render: (address: any) => getEllipsisTxt(address, 5),
    },
  ];

  return (
    <div style={{ width: "65vw", padding: "15px" }}>
      <h1>💰Token Balances</h1>
      <Skeleton loading={!assets}>
        {assets && (
          <Table
            dataSource={assets}
            columns={columns}
            rowKey={(record) => {
              return record.token_address;
            }}
          />
        )}
      </Skeleton>
    </div>
  );
};
export default ERC20Balances;
