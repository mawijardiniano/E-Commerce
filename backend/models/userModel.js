
const userSchema = {
    name: { type: 'string', required: true },    // Required: Name of the user
    email: { type: 'string', required: true },   // Required: Email of the user
    age: { type: 'number', required: true },     // Required: Age of the user
    createdAt: { type: 'timestamp', required: true }, // Required: Timestamp when the user is created
  };
  
  export default userSchema;
  