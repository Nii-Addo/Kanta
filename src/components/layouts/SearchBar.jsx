import React from 'react';
import { useField , Formik, Form, ErrorMessage  } from 'formik';
import  * as Yup  from 'yup';
import styled from 'styled-components'
import '../../css/SearchBarCss.css';

const MySearchInput = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <input {...field} {...props} />
    </>
  );
};

const StyledSearchInput=styled(MySearchInput)`
  padding: 0px 10px 0 20px;
  font-size: 1.125rem;
  font-weight: 500;
  -webkit-box-shadow: none;
  box-shadow: none;
  height:40px;
  width: 100%;
  border-radius:10px 0  0 10px !important;
  font-size-adjust: none;
  word-wrap: break-word;
`;

const StyledSearchButton=styled.button`
  cursor: pointer;
  height:40px;
  font-size: 17px;
  font-weight:500;
  color:white;
  line-height: 14px;
  text-align: center;
  text-transform: uppercase;
  background-color: var(--buttonPrimary);
  border-radius:0 10px  10px 0 !important;

  &:hover{
    color:white;
  }
`;

const SearchBar= ({}) => (
  <div>
    <Formik
      initialValues={{ searchText: '' }}

      validationSchema={Yup.object({
        searchText: Yup.string()
          .required('Required'),
      })}

      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {props => (
            <Form>
                <div className="search-elements input-group">
                   <StyledSearchInput className="form-control flex border-right-0 border border-dark" name="searchText" type="search" placeholder="search text"/>
                   <span className="input-group-btn input-group-append">
                        <StyledSearchButton className="btn border-left-0 border border-danger" type="submit">Search</StyledSearchButton>
                    </span>
                </div>
              </Form>
      )}
    </Formik>
  </div>
);

export default SearchBar
