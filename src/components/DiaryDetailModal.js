import React from "react";
import {
  Modal,
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, SPACE, RADIUS, TYPO } from "../styles/tokens";

export default function DiaryDetailModal({ visible, onClose, entry }) {
  if (!entry) return null;

  const { title, date, preview, body, heroUri, moodUri } = entry;
  const imageSource = heroUri || moodUri;
  const text = body || preview;

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          {imageSource ? (
            <Image
              source={
                typeof imageSource === "string" ? { uri: imageSource } : imageSource
              }
              style={styles.hero}
              resizeMode="cover"
            />
          ) : null}

          <View style={styles.content}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
            {text ? <Text style={styles.body}>{text}</Text> : null}

            <Pressable
              onPress={onClose}
              accessibilityRole="button"
              hitSlop={SPACE.s}
              style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
              ]}
            >
              <Text style={styles.buttonText}>Tutup</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: SPACE.l,
  },
  hero: {
    width: "100%",
    aspectRatio: 16 / 9,
    backgroundColor: COLORS.border,
    borderBottomLeftRadius: RADIUS.card,
    borderBottomRightRadius: RADIUS.card,
  },
  content: {
    padding: SPACE.l,
    gap: SPACE.s,
  },
  title: {
    fontSize: TYPO.h1,
    fontWeight: "700",
    color: COLORS.text,
  },
  date: {
    fontSize: TYPO.caption,
    color: COLORS.muted,
  },
  body: {
    fontSize: TYPO.body,
    color: COLORS.text,
    lineHeight: 22,
    marginTop: SPACE.xs,
  },
  button: {
    marginTop: SPACE.xl,
    paddingVertical: SPACE.m,
    paddingHorizontal: SPACE.l,
    borderRadius: RADIUS.card,
    backgroundColor: COLORS.accent,
    alignItems: "center",
  },
  buttonPressed: {
    opacity: 0.85,
  },
  buttonText: {
    color: COLORS.surface,
    fontWeight: "700",
    fontSize: TYPO.body,
  },
});
