import { Text } from "react-native";

const ProductListItem = ({ item }: { item: any }) => {
  return <Text style={{ fontSize: 30 }}>{item.name}</Text>;
};

export default ProductListItem;
