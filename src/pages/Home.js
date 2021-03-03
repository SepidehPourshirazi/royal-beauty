import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  CardBody,
  CardSubtitle,
} from "react-bootstrap";
import { Loading } from "../components/Loading";
import { baseUrl } from "../shared/baseUrl";
import { FadeTransform } from "react-animation-components";

function RenderCard({ item, isLoading, errMess }) {
  console.log(item);
  if (isLoading) {
    return <Loading />;
  } else if (errMess) {
    return <h4>{errMess}</h4>;
  } else
    return (
      <FadeTransform
        in
        transformProps={{
          exitTransform: "scale(0.5) translateY(-50%)",
        }}
      >
        <Card>
          <Card.Img src={baseUrl + item.image} alt={item.name} />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
          </Card.Body>
        </Card>
      </FadeTransform>
    );
}

function Home(props) {
  console.log("ooooooo", props);
  return (
    <div className="container">
      <div className="row align-items-start">
        <div className="col-12 col-md m-1">
          {props.fragrances.map((f) => (
            <RenderCard
              item={f}
              isLoading={f.fragrancesLoading}
              errMess={f.fragrancesErrMess}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
