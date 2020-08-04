pragma solidity >=0.4.22 <0.7.0; 
pragma experimental ABIEncoderV2; 

contract Event { 
    string eventName; 
    address owner; 
    uint totalSales; 
     
    constructor(string memory newEventName) public { 
        eventName = newEventName; 
        owner = msg.sender; 
        totalSales = 0; 
    } 

    struct Scan { 
        uint ticketid; 
        string name; 
        string date; 
    } 
     
    struct Ticket { 
        uint ticketid; 
    } 
     
    struct User { 
        uint ticketid; 
        string name; 
        string date; 
    } 
     
    mapping(uint => Ticket) public tickets; 
    mapping(uint => User[]) public purchasers; 
    mapping(uint => Scan[]) public scans; 
     
    modifier isOwner() { 
        require(msg.sender == owner); 
        _; 
    } 
     
    function addTicket(uint ticketId, string memory name, string memory today) public isOwner{ 
        Ticket memory newTicket = Ticket({ 
            ticketid: ticketId 
        }); 
        tickets[ticketId] = newTicket; 
        User memory purchaser = User({ 
            ticketid: ticketId, 
            name: name, 
            date: today 
        }); 
        purchasers[ticketId].push(purchaser); 
        totalSales++; 
    } 

    function getTotalSales() public isOwner view returns (uint){ 
        return totalSales; 
    } 
     
    function addScan(uint ticketId, string memory scanName, string memory today) public isOwner { 
        Scan memory newScan = Scan({ 
            ticketid: ticketId, 
            name: scanName, 
            date: today 
        }); 
        scans[ticketId].push(newScan); 
    }

    function getScans(uint ticketId) public isOwner view returns (Scan[] memory){ 
        return scans[ticketId]; 
    } 

    function addPurchasers(uint ticketId, string memory name, string memory today) public isOwner { 
        User memory purchaser = User({ 
            ticketid: ticketId, 
            name: name, 
            date: today 
        }); 
        purchasers[ticketId].push(purchaser); 
    } 

    function getPurchasers(uint ticketId) public isOwner view returns (User[] memory){ 
        return purchasers[ticketId]; 
    } 
}