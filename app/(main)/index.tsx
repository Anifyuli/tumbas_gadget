import { StyleSheet, FlatList, View, Text } from "react-native";
import React from "react";
import { PRODUCTS } from "@/assets/images/products";
import ProductListItems from "@/components/product-list-items";
import ListHeader from "@/components/list-header";

export default function Home() {
  return (
    <View>
      <FlatList
        data={PRODUCTS}
        renderItem={({ item }) => (
          <View>
            <ProductListItems product={item} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={style.flatListContent}
        columnWrapperStyle={style.flatListColumn}
        style={{ paddingHorizontal: 5, paddingVertical: 5 }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  flatListContent: {
    paddingBottom: 20,
  },
  flatListColumn: {
    justifyContent: "space-around",
  },
});
