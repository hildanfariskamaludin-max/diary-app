import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function DiaryCard({ title, date, preview, moodUri, moodColor }) {
  return (
    <View style={[styles.card, moodColor && { borderColor: moodColor }]}>
      <Image
        source={typeof moodUri === "string" ? { uri: moodUri } : moodUri}
        style={[styles.mood, { borderColor: moodColor }]}
      />

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.preview} numberOfLines={3} ellipsizeMode="tail">
          {preview}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: "#1fa2ff",
    borderRadius: 12,
    marginBottom: 12,
  },
  mood: {
    width: 64,
    height: 64,
    borderRadius: 32,

    borderWidth: 2,
    borderColor: "#050505",
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
  },
  date: {
    fontSize: 12,
    color: "#6b7280",
    marginBottom: 6,
  },
  preview: {
    fontSize: 14,
  },
});
