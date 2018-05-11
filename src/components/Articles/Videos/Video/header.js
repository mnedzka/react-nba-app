import React from 'react';
import TeamInfo from '../../Elements/teamInfo';

const header = (props) => {

    const teamInfo = (team) => {
        return team ? (
            <TeamInfo team={team} />
        ) : null;
    }

    return (
        <div>
            {teamInfo(props.data)}
        </div>
    );
};

export default header;