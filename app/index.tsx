import { FlatList, Text, View } from "react-native";
import products from "@/assets/products.json";
import ProductListItem from "@/components/ProductListItem";
import { Button, ButtonText } from "@/components/ui/button";

export default function HomeScreen() {
  return (
    // <View>
    //   <FlatList
    //     data={products}
    //     renderItem={({ item }) => <ProductListItem item={item} />}
    //   />
    // </View>
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
      <Button size="md" variant="solid" className="bg-red-500">
        <ButtonText>Gluestack Button</ButtonText>
      </Button>
    </View>
  );
}
