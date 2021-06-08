import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Route } from 'react-router-dom';
import  CollectionsOverview  from '../../component/collections-overview/collections-overview.component';
import { selectCollections } from '../../redux/shop/shop.selectors';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) =>(
            
    <div className= 'shop-page'>
       <Route exact path = {`${match.path}`} component= {CollectionsOverview }/>
       <Route path={`${match.path}/:collectionId`} component = {CollectionPage}/>
    
   </div>

);
    
const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(ShopPage);