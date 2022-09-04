pragma solidity ^0.8.16;

contract RatingContract {

    uint hospitalCount = 0;

    // For storing the ratings and reviews for each hospital
    struct Hospital {
        string name;
        string place;
        string state;
        string[] specialization;
        string imageHash;
        uint points;
        uint count;
        Rating[] reviewList;
        uint id;
    }

    // maps the hId (Hospital Id) to the Hospital object
    // hospital are uniquely identified by hId (hospital ID)
    mapping(uint => Hospital) HospitalMap;

    // For storing the user reviews for each hospital
    struct Rating {
        string name;
        uint time;
        uint8 star;
        string review;
    }

    // Returns the total points the hospital has received from users
    function getPoints(uint hId) public view returns (uint) {
        return HospitalMap[hId].points;
    }

    // Returns the total count of users who had rated the hospital
    function getCount(uint hId) public view returns (uint) {
        return HospitalMap[hId].count;
    }

    // Returns the user reviews list for the hospital
    function getHospital(uint hId) public view returns (Hospital memory) {
        return HospitalMap[hId];
    }

    function getHospitalList() public view returns (Hospital[] memory) {
        Hospital[] memory ret = new Hospital[](hospitalCount+1);
        for (uint i = 0; i <= hospitalCount; i++) {
            ret[i] = HospitalMap[i];
        }
        return ret;
    }

    // Function for users to give rating for a hospital
    function createRating(uint hId, string memory name, uint8 _star, string memory _review) public {
        HospitalMap[hId].count+=1;
        HospitalMap[hId].points+=_star;
        HospitalMap[hId].reviewList.push(Rating(name,block.timestamp, _star, _review));
    }

    function createHospital(string memory name, string memory place, string memory state, string[] memory specialization, string memory imageHash) public {
        hospitalCount++;
        HospitalMap[hospitalCount].name = name;
        HospitalMap[hospitalCount].place = place;
        HospitalMap[hospitalCount].state = state;
        HospitalMap[hospitalCount].specialization = specialization;
        HospitalMap[hospitalCount].imageHash = imageHash;
        HospitalMap[hospitalCount].id = hospitalCount;
    }

}