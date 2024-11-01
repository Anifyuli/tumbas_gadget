import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { Product } from "@/assets/images/types/product";
import { Link, usePathname } from "expo-router";

const ProductListItems = ({ product }: { product: Product }) => {
  return (
    <Link
      asChild
      href={{ pathname: '/products/[slug]', params: { slug: product.slug } }}
    >
      <Pressable style={styles.item}>
        <View style={styles.itemImageContainer}>
          <Image source={product.heroImage} style={styles.itemImage} />
        </View>
        <View style={styles.itemTextContainer}>
          <Text style={styles.itemTitle}>{product.title}</Text>
          <Text style={styles.itemPrice}>{product.price.toFixed(2)}</Text>
        </View>
      </Pressable>
    </Link>
  );
};

export default ProductListItems;

const styles = StyleSheet.create({
  item: {
    width: "100%",
    backgroundColor: "white",
    marginVertical: 8,
    borderRadius: 10,
    overflow: "hidden",
  },
  itemImageContainer: {
    borderRadius: 10,
    width: "100%",
    height: 150,
  },
  itemImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  itemTextContainer: {
    padding: 8,
    alignItems: "flex-start",
    gap: 4,
  },
  itemTitle: {
    fontSize: 16,
    color: "darkslategray",
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
