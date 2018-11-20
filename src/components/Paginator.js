import React from 'react'
import Button from '@material-ui/core/Button';
 export default class PaginationControls extends React.Component {
    render () {
        const {viewer} = this.props
        return <div>
            <Button>Back</Button>
            <span style={{width: 300, display: 'inline-block'}}>{`Page ${viewer.currentPage} of ${parseInt(viewer.cardCount / 12, 10)}`}</span>
            <Button>Forward</Button>
        </div>
    }
}  