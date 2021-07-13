import Alert from 'react-bootstrap/Alert'

const Message = ({ balance }) => {
    return (
      <div>
      <Alert variant="info"> Balance : {balance}</Alert>
      </div>
  )
}

export default Message
