// onRecordBeforeUpdateRequest((e) => {
//     const incrementField = "votes";
//     const currentVotesValue = e.record.get(incrementField); // Get the current votes value
//     const newVotesValue = e.data[incrementField]; // Get the incoming value to be set

//     // Check if the incoming data contains the "votes" field
//     if (newVotesValue === undefined) {
//         throw new Error("Votes field is missing in the update request.");
//     }

//     // Validate that the update only increments the "votes" field by +1
//     if (newVotesValue !== currentVotesValue + 1) {
//         throw new Error("Votes can only be incremented by 1.");
//     }

//     // If validation passes, allow the update to proceed
//     e.record.set(incrementField, newVotesValue);
// }, "votes");
