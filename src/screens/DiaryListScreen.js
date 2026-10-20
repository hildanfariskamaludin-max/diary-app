import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  useWindowDimensions,
} from "react-native";
import DiaryCard from "../components/DiaryCard";
import DiaryDetailModal from "../components/DiaryDetailModal";
import { COLORS, SPACE, RADIUS, TYPO, BREAKPOINTS } from "../styles/tokens";
import terasRumah from "../../assets/moods/terasrumah.jpg";
import sore from "../../assets/moods/sore.jpg";
import pagi from "../../assets/moods/pagi.jpg";
import avatar from "../../assets/moods/avatar.jpg";

const DATA = [
  {
    id: 1,
    title: "Pagi yang Tenang",
    date: "2025-10-06",
    preview:
      "Hari ini aku bangun lebih pagi dan berjalan kaki 20 menit. Udara terasa sejuk...",
    body:
      "Hari ini aku bangun lebih pagi dari biasanya dan berjalan kaki 20 menit mengelilingi komplek. Udara pagi terasa sejuk dan pikiran jadi lebih tenang. Setelah itu aku menyiapkan sarapan sambil mendengarkan podcast favorit sebelum mulai belajar.",
    moodUri: pagi,
    heroUri: pagi,
    moodColor: "#d7ee0a",
  },
  {
    id: 2,
    title: "Produktif di Kampus",
    date: "2025-10-05",
    preview:
      "Menyelesaikan modul praktikum dan berdiskusi dengan tim. Banyak insight baru...",
    body:
      "Hari ini aku berhasil menyelesaikan modul praktikum dan berdiskusi panjang dengan tim di kelas. Banyak insight baru soal desain antarmuka yang bisa langsung aku coba di proyek diary-app. Melelahkan, tapi memuaskan.",
    moodUri: "https://picsum.photos/seed/focus/80",
    heroUri: "https://picsum.photos/seed/focus/800/450",
  },
  {
    id: 3,
    title: "Senja di Taman",
    date: "2025-10-04",
    preview:
      "Menikmati senja sambil membaca buku favorit. Warna langit sangat indah...",
    body:
      "Sore ini aku duduk di taman sambil membaca buku favorit. Warna langit berubah jingga keunguan dan angin bertiup pelan. Momen sederhana seperti ini yang bikin kepala kembali segar.",
    moodUri: "https://picsum.photos/seed/calm/80",
    heroUri: "https://picsum.photos/seed/calm/800/450",
    moodColor: "#8d26fa",
  },
  {
    id: 4,
    title: "Pagi hari",
    date: "2026-10-09",
    preview:
      "pagi ini ku awali hari dengan membaca buku di teras rumah sambil menikmati secangkir kopi hitam hangat....",
    body:
      "Pagi ini ku awali hari dengan membaca buku di teras rumah sambil menikmati secangkir kopi hitam hangat. Suasana masih sepi dan burung-burung mulai berkicau. Rasanya hari ini akan berjalan dengan baik.",
    moodUri: terasRumah,
    heroUri: terasRumah,
    moodColor: "#e00c8b",
  },
  {
    id: 5,
    title: "Pulang dari Kampus",
    date: "2026-10-08",
    preview:
      "setelah pulang dari kampus aku melanjutkan hari dengan berolahraga ringan seperti jalan-jalan menikmati sore hari di tepi pantai yang indah.",
    body:
      "Setelah pulang dari kampus aku melanjutkan hari dengan olahraga ringan, jalan-jalan menikmati sore di tepi pantai yang indah. Ombak kecil dan langit sore membuat rasa lelah setelah kelas perlahan hilang.",
    moodUri: sore,
    heroUri: sore,
    moodColor: "#5f9803",
  },
];

export default function DiaryListScreen() {
  const { width } = useWindowDimensions();
  const twoCols = width >= BREAKPOINTS.tablet;
  const [selected, setSelected] = useState(null);

  const keyForCols = useMemo(() => (twoCols ? "grid2" : "list1"), [twoCols]);

  const renderItem = ({ item }) => (
    <View style={twoCols ? styles.itemWrap : undefined}>
      <DiaryCard
        title={item.title}
        date={item.date}
        preview={item.preview}
        moodUri={item.moodUri}
        moodColor={item.moodColor}
        variant={twoCols ? "grid" : "list"}
        onPress={() => setSelected(item)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={avatar} style={styles.moodAvatar} />
        <Text style={styles.header}>Buku Harian</Text>
      </View>

      <FlatList
        key={keyForCols}
        data={DATA}
        numColumns={twoCols ? 2 : 1}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderItem}
        columnWrapperStyle={twoCols ? { gap: SPACE.m } : undefined}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={<Text style={styles.empty}>Belum ada entri.</Text>}
      />

      <DiaryDetailModal
        visible={!!selected}
        entry={selected}
        onClose={() => setSelected(null)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ede7e7",
  },
  content: {
    padding: SPACE.l,
    paddingTop: SPACE.m,
    gap: SPACE.m,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: SPACE.m,
    paddingHorizontal: SPACE.l,
    paddingTop: SPACE.l,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.text,
  },
  moodAvatar: {
    width: 48,
    height: 48,
    borderRadius: RADIUS.avatar,
    borderWidth: 2,
    borderColor: "#3cdc0b",
  },
  itemWrap: {
    flex: 1,
  },
  empty: {
    textAlign: "center",
    color: COLORS.muted,
    marginTop: 40,
  },
});
