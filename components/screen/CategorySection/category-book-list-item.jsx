import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import { SIZES, icons, FONTS, COLORS } from "../../../constants/index";
import Label from "../../commun/label";
import Spacer from "../../commun/spacer";

export default function CategoryBookListItem({ book, key }) {
  var getGenreColor = (genre) => {
    if (genre === "Romance") return styles.genreRed;
    if (genre === "Drama") return styles.genreBlue;
    if (genre === "Adventure") return styles.genreGreen;
  };

  var items = book.genre.map((value, index) => (
    <View
      key={index}
      style={{
        ...styles.genre,
        ...getGenreColor(value),
      }}
    >
      <Text
        key={index}
        style={{
          ...styles.label,
          ...getGenreColor(book.genre[index]),
        }}
      >
        {book.genre[index]}
      </Text>
    </View>
  ));
  return (
    <View style={styles.card}>
      <Image style={styles.cover} source={book.bookCover} />
      <View style={styles.layout}>
        <View style={styles.info}>
          <Text style={styles.name}>{book.bookName}</Text>
          <Text style={styles.author}>{book.author}</Text>
          <Spacer height={5} />
          <View style={styles.stats}>
            <Label
              icon={icons.page_icon}
              styleIcon={styles.icon}
              styleLabel={styles.label}
              label={book.pageNo}
            />
            <Spacer width={10} />
            <Label
              icon={icons.read_icon}
              styleIcon={styles.icon}
              styleLabel={styles.label}
              label={book.readed}
            />
          </View>
          <Spacer height={10} />
          <View style={styles.genres}>{items}</View>
        </View>
        <Image style={styles.bookmark} source={icons.bookmark_icon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  genre: {
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 10,
    padding: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  genreRed: {
    backgroundColor: COLORS.darkRed,
    color: COLORS.lightRed,
  },
  genreBlue: {
    backgroundColor: COLORS.darkBlue,
    color: COLORS.lightBlue,
  },
  genreGreen: {
    backgroundColor: COLORS.darkGreen,
    color: COLORS.lightGreen,
  },
  genres: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  icon: {
    backgroundColor: COLORS.secondary,
  },
  label: {
    color: COLORS.lightGray,
  },
  cover: {
    height: 150,
    width: 100,
    borderRadius: SIZES.radius,
  },
  info: {
    flex: 1,
  },
  SecondaryCardInfoIcon: {
    height: 15,
    width: 15,
  },
  layout: {
    flexDirection: "row",
    justifyContent: "space-around",
    flex: 1,
    padding: 5,
  },
  card: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
    margin: 5,
  },
  bookmark: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  name: {
    ...FONTS.h3,
    color: COLORS.white,
  },
  author: {
    ...FONTS.body4,
    color: COLORS.lightGray,
  },
  stats: {
    flexDirection: "row",
  },
});
