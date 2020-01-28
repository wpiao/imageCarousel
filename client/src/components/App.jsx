import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '../elements/grid.jsx';
import Row from '../elements/row.jsx';
import BigImage from '../elements/bigImage.jsx';
import BigImageDiv from '../elements/bigImageDiv.jsx';
import SmallImage from '../elements/smallImage.jsx';
import SmallImageDiv from '../elements/smallImageDiv.jsx';

const App = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [loadedGallery, setLoadedGallery] = useState({});

  const fetchData = () => {
    const url = 'http://localhost:3000/gallery/6';

    axios.get(url)
      .then(({ data }) => {
        setLoadedGallery(data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(loadedGallery);


  const content = (
    <>
      <Grid>
        <BigImageDiv size={50}>
          <BigImage src="https://a0.muscache.com/im/pictures/7a1f5403-a6ee-463d-98c4-a4b40030a70f.jpg?aki_policy=xx_large" />
        </BigImageDiv>
        <SmallImageDiv size={25}>
          <Row>
            <SmallImage src="https://a0.muscache.com/im/pictures/30fc51c6-e207-4976-9956-36036b439498.jpg?aki_policy=large" />
          </Row>
          <Row>
            <SmallImage src="https://a0.muscache.com/im/pictures/295e784c-4758-45cb-bc25-0d5716a7e05e.jpg?aki_policy=large" />
          </Row>
        </SmallImageDiv>
        <SmallImageDiv size={25}>
          <Row>
            <SmallImage src="https://a0.muscache.com/im/pictures/425dc79f-bc93-4e7a-ad3d-daad3c709eb3.jpg?aki_policy=large" />
          </Row>
          <Row>
            <SmallImage src="https://a0.muscache.com/im/pictures/7bea153d-4ea9-479a-8933-ebb9176000a5.jpg?aki_policy=large" />
          </Row>
        </SmallImageDiv>
      </Grid>
    </>
  );

  return content;
};


export default App;
