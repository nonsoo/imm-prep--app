export default {
  name: "topic",
  Title: "Topic",

  type: "object",
  fields: [
    {
      name: "topicName",
      title: "Topic Name",
      type: "string",
    },
    {
      name: "quesAnsPair",
      title: "Question Answer Pair",
      type: "array",
      of: [{ type: "questionAns" }],
    },
  ],
};
