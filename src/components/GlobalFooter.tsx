import { Layout } from "antd";
import Text from "antd/lib/typography/Text";

const { Footer } = Layout;

const GlobalFooter = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      <Text style={{ display: "block" }}>
        ⭐️ Please star this{" "}
        <a
          href="https://github.com/ethereum-boilerplate/ethereum-boilerplate/"
          target="_blank"
          rel="noopener noreferrer"
        >
          boilerplate
        </a>
        , every star makes us very happy!
      </Text>

      <Text style={{ display: "block" }}>
        🙋 You have questions? Ask them on the {""}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://forum.moralis.io/t/ethereum-boilerplate-questions/3951/29"
        >
          Moralis forum
        </a>
      </Text>

      <Text style={{ display: "block" }}>
        📖 Read more about{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://moralis.io?utm_source=boilerplatehosted&utm_medium=todo&utm_campaign=ethereum-boilerplat"
        >
          Moralis
        </a>
      </Text>
    </Footer>
  );
};

export default GlobalFooter;
