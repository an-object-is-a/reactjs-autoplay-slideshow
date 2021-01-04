import React from 'react';

function Card(props) {
    return (
        <div style={styles.card} id={props.id}>
            <img style={styles.card_img} src={props.picsum} alt="ok"/> 
        </div>
    )
}

const styles = {
    card: {
        margin: 0,
        padding: 0,
        width: 'inherit',
        height: 'inherit',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    card_img: {
        maxWidth: '100%',
        maxHeight: '100%',
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    }
}

export default React.memo(Card);