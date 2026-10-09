import React from "react";
import DiaryCard from "../components/DiaryCard";
import terasRumah from "../../assets/moods/terasrumah.jpg";
import sore from "../../assets/moods/sore.jpg";
import pagi from "../../assets/moods/pagi.jpg";
import avatar from "../../assets/moods/avatar.jpg";

import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const diaryEntries = [
  {
    id: 1,
    title: "Pagi yang Tenang",
    date: "2025-10-06",
    preview:
      "Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk...",
    moodUri: pagi,
    moodColor: '#d7ee0a'
  },
  {
    id: 2,
    title: "Produktif di Kampus",
    date: "2025-10-05",
    preview:
      "Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru...",
    moodUri: "https://picsum.photos/seed/focus/80",
  },
  {
    id: 3,
    title: "Senja di Taman",
    date: "2025-10-04",
    preview:
      "Menikmati senja sambil membaca buku favorit. Warna langit sangat indah...",
    moodUri: "https://picsum.photos/seed/calm/80",
    moodColor: '#8d26fa',
  },
  {
    id: 4,
    title: "Pagi hari",
    date: "2026-10-09",
    preview:
      "pagi ini ku awali hari dengan membaca buku di teras rumah sambil menikmati secangkir kopi hitam hangat....",
    moodUri: terasRumah,
    moodColor: '#e00c8b',
  },
  {
    id: 5,
    title: "Pulang dari Kampus",
    date: "2026-10-08",
    preview:
      "setelah pulang dari kampus aku melanjutkan hari dengan berolahraga ringan seperti jalan-jalan menikmati sore hari di tepi pantai yang indah.",
    moodUri: sore,
    moodColor: '#5f9803',
  },
];

export default function DiaryListScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.headerContainer}>
        <Image source={avatar} style={styles.moodAvatar} />
        <Text style={styles.header}>Buku Harian</Text>
      </View>

      {diaryEntries.map((entry) => (
        <DiaryCard
          key={entry.id}
          title={entry.title}
          date={entry.date}
          preview={entry.preview}
          moodUri={entry.moodUri}
          moodColor={entry.moodColor}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ede7e7",
  },
  content: {
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  moodAvatar: {
    width: 48,
    height: 48,
    borderRadius: 25,
    marginBlock: 12,

    borderWidth: 2,
    borderColor: "#3cdc0b",
  },
});
