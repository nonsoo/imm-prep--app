export default {
  name: "course",
  type: "document",
  fields: [
    {
      name: "CourseName",
      title: "Course Name",
      type: "string",
    },
    {
      name: "topics",
      title: "Topics",
      type: "array",
      of: [{ type: "topics" }],
    },
  ],
};
