export default {
  name: "questionAns",
  title: "question Answer Pair",
  type: "object",
  fields: [
    {
      name: "uuID",
      title: "Unique Identifier",
      type: "string",
    },
    {
      name: "question",
      title: "Question",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "answer",
      title: "Answer",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "Questionimage",
      title: "Associated Question Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
