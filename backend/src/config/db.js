import { connect } from 'mongoose';

const connectDB = async () => {
  try {    
    const mongoUrl = `mongodb+srv://tanujalokhande2526:Tanuja%402526@cluster0.zeh14.mongodb.net/online_vehical`;
    await connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected successfully!');
  } catch (error) {
    console.error('Database connection failed:', error.message);
    process.exit(1);
  }
};

export default connectDB;
