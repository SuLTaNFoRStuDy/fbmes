import React, { forwardRef } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./Message.css";
import FlipMove from "react-flip-move";

const Message = forwardRef(({ message, username }, ref) => {
  const isUser = username === message.userName;

  return (
    <div ref={ref} className={`messages ${isUser && "messages__user"}`}>
      <FlipMove>
        <Card className={isUser ? "messages__userCard" : "messages__guestCard"}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {!isUser && `${message.userName || "Unknown User"}: `}{" "}
              {message.message}
            </Typography>
          </CardContent>
        </Card>
      </FlipMove>
    </div>
  );
});

export default Message;
