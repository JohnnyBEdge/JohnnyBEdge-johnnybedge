import Senators from './data/senators'


export const republicans = () => {
  return Senators.filter(sen => sen.party == "Republican")
};

export const democrats = () => {
  return Senators.filter(sen => sen.party == "Democrat")
}

export const independents = () => {
  return Senators.filter(sen => sen.party == "Independent")
}

export const males = () => {
  return Senators.filter(sen => sen.person.gender == "male")
}

export const females = () => {
  return Senators.filter(sen => sen.person.gender == "female")
}

export const byState = (state = 'UT') => {
  return Senators.filter(sen => sen.state == "UT")
}

export const mapping = () => {
  return Senators.map(sen => {
    return {firstName: sen.person.firstname, lastName: sen.person.lastname, party: sen.party, gender: sen.party.gender}
  })

}


export const reducedCount = () => {
  
  const count = Senators.reduce((tally,sen) => {
  let senParty= sen.party.toLowerCase();
    tally[senParty] = (tally[senParty] || 0) + 1;
    return tally;
  }, {})
  return count;
  
}


const REPLACE_ME_WITH_CODE = false
