import React, { useEffect, useRef, useContext } from 'react';
import styles from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);

    useEffect(
        () => {
            console.log('[Cockpit.js] useEffect');
            // Mimic http request
            // setTimeout(
            //     () => {
            //         alert('Saved data to cloud!');
            //     },
            //     2000
            // );
            toggleBtnRef.current.click();
            return () => {
                console.log('[Cockpit.js] cleanup work in useEffect');
            };
        },
        // If pass an empty array (i.e should run when a depency changes, but has no depencies),
        // it will run the initial first time, but then never again
        []
    );

    useEffect(
        () => {
            console.log('[Cockpit.js] 2nd useEffect');
            return () => {
                console.log('[Cockpit.js] cleanup work in 2nd useEffect');
            }
        }
    );

    const classes = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = styles.Red;
    }
    if (props.personsLength <= 2) {
      classes.push(styles.red);
    }
    if (props.personsLength <= 1) {
      classes.push(styles.bold);
    }
    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}
            >
                Toggle Persons
            </button>
            <button onClick={authContext.login}>Log In</button>
        </div>
    );
}

export default React.memo(cockpit);