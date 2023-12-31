import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import React from "react";
import Colors from "../modules/Colors";
import { dataStudent } from "../data/student";
import { TypeStudent } from "../types/Types";

const { width, height } = Dimensions.get("screen");

const StudentScreen = () => {
  const renderItems = ({
    item,
    index,
  }: {
    item: TypeStudent;
    index: number;
  }) => {
    return (
      <View
        key={index}
        style={[
          styles.viewCard,
          { backgroundColor: index === 1 ? Colors.white : Colors.gray },
        ]}
      >
        <View>
          <Text
            style={[
              styles.title,
              { color: index === 1 ? Colors.dark : Colors.white },
            ]}
          >
            {item.name}
          </Text>
        </View>
        <View>
          <Text style={styles.age}>Age: {item.age}</Text>
        </View>
        <View>
          <Text style={styles.grade}>Grade: {item.grade}</Text>
        </View>
        <View style={styles.subject}>
          <View style={styles.subjectItem}>
            <Text>Subject:</Text>
            {item.subject.map((subject: string, keySubject: number) => (
              <Text key={keySubject}>
                {subject} {keySubject + 1 < item.subject.length && ","}
              </Text>
            ))}
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleTop}>Students</Text>
        <Text style={styles.numberStudent}>
          Total Student: {dataStudent.length}
        </Text>
      </View>
      <FlatList
        data={dataStudent}
        renderItem={renderItems}
        keyExtractor={(item, index) => index.toString()}
        numColumns={1}
        style={{
          marginTop: 10,
        }}
      />
    </View>
  );
};

export default StudentScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 50,
    backgroundColor: Colors.blue,
    width: width,
    height: height,
  },
  titleTop: {
    fontSize: 25,
    fontWeight: "600",
    textAlign: "center",
    color: Colors.white,
  },
  numberStudent: {
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    color: Colors.white,
  },
  viewTop: {
    textAlign: "center",
  },
  viewCard: {
    backgroundColor: Colors.gray,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.white,
  },
  titleActive: {
    fontSize: 20,
    fontWeight: "600",
    color: Colors.dark,
  },
  age: {
    fontSize: 16,
    fontWeight: "400",
    marginVertical: 5,
  },

  grade: {
    fontSize: 16,
    fontWeight: "400",
    marginVertical: 5,
  },
  subject: {
    flexDirection: "row",
    gap: 5,
  },
  subjectItem: {
    flexDirection: "row",
    gap: 5,
  },
});
