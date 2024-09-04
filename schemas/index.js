// schemas/index.js

import mongoose from 'mongoose';

const connect = () => {
  mongoose
    .connect(
      // 빨간색으로 표시된 부분은 대여한 ID, Password, 주소에 맞게끔 수정해주세요!
      'mongodb+srv://qodtjr:1111@express-mango.4ahu3.mongodb.net/?retryWrites=true&w=majority&appName=express-mango',
      {
        dbName: 'todo_memo', // todo_memo 데이터베이스명을 사용합니다.
      },
    )
    .then(() => console.log('MongoDB 연결에 성공하였습니다.'))
    .catch((err) => console.log(`MongoDB 연결에 실패하였습니다. ${err}`));
};

mongoose.connection.on('error', (err) => {
  console.error('MongoDB 연결 에러', err); //서비스 중에 오류발생시 출력
});

export default connect;
