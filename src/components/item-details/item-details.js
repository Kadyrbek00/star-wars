import React, { Component } from "react";
import ErrorButton from "../error-button/error-button";
import Spinner from "../spinner";

import "./person-details.css";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}: </span>
      <span>{item[field]}</span>
    </li>
  );
};

export { Record };

export default class ItemDetails extends Component {
  state = {
    item: null,
    image: null,
    close: false,
    loading: false,
  };

  deletedItem = () => {
    this.setState({ close: true })
  }

  componentDidMount() {
    this.uploadPerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.uploadPerson();
    }
  }

  uploadPerson() {
    const { itemId, getData, getImageUrl } = this.props;

    this.setState({ loading: true })

    if (!itemId) {
      return;
    }

    getData(itemId).then((item) => {
      this.setState({ item, loading: false, image: getImageUrl(item) });
    });
  }

  render() {
    const { item, image, close, loading } = this.state;

    if (!item) {
      return <div className="person-details card">Select person</div>;
    }

    if (close) {
      return
    }

    if (loading) {
      return <Spinner />
    }

    return (
      <div className="person-details card">
        <img className="person-image" alt="person" src={image} />

        <div className="card-body">
          <h4>{item.name}</h4>
          <ul className="list-group list-group-flush">

            {React.Children.map(this.props.children, (child) => {
              return React.cloneElement(child, { item });
            })}

            <li className="list-group-item">
              <ErrorButton />
            </li>
            <li onClick={this.deletedItem} className="toggle-planet btn btn-warning btn-lg">Deleted</li>
          </ul>
        </div>
      </div>
    );
  }
}
