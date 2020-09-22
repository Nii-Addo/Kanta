import React, {useState} from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';
import ProgressBar from 'react-bootstrap/ProgressBar';
import PropTypes from 'prop-types';
import {RecommendationButton} from '../../components/styledComponents/Button';
import {ReviewButton} from '../../components/styledComponents/Button';
import '../../css/TabbedMenuCss.css';

const TabbedMenu = (props) => {
 const {ratings,number_rated,number_reviewed,number_recommended,questions_answers,details}=props.product;
 const [key, setKey] = useState('item_details');
 const now = 60;
  return (
    <Tabs
      id="controlled-tab"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      transition={false}
      className="ml-4"
    >
      <Tab eventKey="item_details" title="Item Details">
        <div className="item_details-mod">
          <h5 className="text-tittle">Product Description</h5>
          <section className="ml-4">
            <p>
            {details.description}
            </p>
          </section>
        </div>

        <div className="item_details-mod">
          <h5 className="text-tittle">Key Highlights</h5>
          <section className="ml-4">
            <ul>
              Specs here
            </ul>
            <div>GHC 55 Item</div>
          </section>
        </div>

        <div className="item_details-mod">
          <h5 className="text-tittle">Product Specification</h5>
          <section className="table-section">
            <Table striped bordered responsive="sm" size="sm">
                <tbody>
                  <tr>
                    <td>Mark</td>
                    <td>Otto</td>
                  </tr>
                  <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                  </tr>
                  <tr>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </Table>
          </section>
        </div>
      </Tab>

      <Tab eventKey="ratings_review" title="Ratings and Review">
        <div className="ratings-review-mod d-flex flex-wrap">
            <section className="rr-box ratings-bar-mod">
              <div className="ratings-bar mb-4">{ratings} stars</div>
              <div className="ratings-text">{number_rated} Ratings & {number_reviewed} Reviews</div>
            </section>

            <section className="ml-2 rr-box recommendation-box">
               <div className="status-bar-mod">
                <ProgressBar now={now} label={`${now}%`} />
               </div>
               <p>Based on {number_recommended} recomendations</p>
               <div>
                 <div>
                   <p className="ml-4">Would you recommend this product?</p>
                   <div className="RecommendationButton-space-mod d-flex flex-wrap">
                     <div className="RecommendationButton-space mr-4 ml-4">
                       <RecommendationButton>Yes</RecommendationButton>
                     </div>
                     <div className="RecommendationButton-space">
                       <RecommendationButton>No</RecommendationButton>
                     </div>
                   </div>
                 </div>
               </div>
            </section>

            <section className="ml-2 rr-box review-space">
               <p className="">Have you used this product?</p>
               <div className="review-button-space"><ReviewButton>Review</ReviewButton></div>
            </section>
        </div>
      </Tab>
      <Tab eventKey="questions_answers" title="Questions and Answers">
        {questions_answers > 0?questions_answers:<h1>Questions and Answers</h1>}
      </Tab>
    </Tabs>
  );
}

export default TabbedMenu
