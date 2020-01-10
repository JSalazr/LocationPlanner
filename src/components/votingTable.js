import React from 'react';
import PropTypes from 'prop-types';
import LocationInfo from './LocationInfo';
import AddParticipantButton from './addParticipantButton';
import ParticipantName from './participantName';

class VotingTable extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            participants: [],
            voteCount: [0, 0, 0],
            winner: -1
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.locations !== this.props.locations){
            this.setState({
                participants: [],
                voteCount: [0, 0, 0],
                winner: -1
            });
        }
    }

    getNewVoteCount = (participants, participant, locationVote) => {
        let voteCount = this.state.voteCount;
        voteCount[participants[participant].vote]--;
        voteCount[locationVote]++;
        return voteCount;
    }

    handleVote = (event) => {
        let participant = event.target.parentElement.rowIndex - 1;
        let locationVote = event.target.cellIndex - 1;
        let participants = this.state.participants;
        if(0 <= participant && participant < participants.length && 0 <= locationVote && locationVote < 3){
            let voteCount = this.getNewVoteCount(participants, participant, locationVote);
            participants[participant].vote = locationVote;
            this.setState({
            participants,
            voteCount,
            winner: voteCount.indexOf(Math.max(...voteCount))
            });
        }
    }

    handleNameChange = (rowKey, newName) => {
        let participants = this.state.participants;
        participants[rowKey].name = newName;
        this.setState({participants});
    }

    handleNewParticipant = () => {
        let participants = this.state.participants;
        participants.push({
            name: '',
            vote: -1
        });
        this.setState({participants});
    }

    renderLocations = () => {
        return this.props.locations.map((location, key) => {
            return (
                <LocationInfo key={key} location={location} colKey={key} winner={this.state.winner} />
            );
        })
    }

    renderParticipants = () => {
        return this.state.participants.map((participant, key) => {
            return(
                <tr key={key}>
                    <td className="participant-column"><ParticipantName rowKey={key} handleNameChange={this.handleNameChange} /></td>
                    <td className={`voting-column ${participant.vote === 0 ? "voted-field" : "empty-field"}`}>{}</td>
                    <td className={`voting-column ${participant.vote === 1 ? "voted-field" : "empty-field"}`}>{}</td>
                    <td className={`voting-column ${participant.vote === 2 ? "voted-field" : "empty-field"}`}>{}</td>
                </tr>
            )
        })
    }

    render(){
        return (
            <React.Fragment>
                <table className="voting-table" onClick={this.handleVote} id="myTable">
                    <tbody>
                        <tr>
                            <th className="participant-column">Participants</th>
                            {this.renderLocations()}
                        </tr>
                        {this.renderParticipants()}
                    </tbody>
                </table>
                <AddParticipantButton handleNewParticipant={this.handleNewParticipant}/>
            </React.Fragment>
        );
    }
  
}

VotingTable.propTypes = {
    locations: PropTypes.array
};
  

export default VotingTable;