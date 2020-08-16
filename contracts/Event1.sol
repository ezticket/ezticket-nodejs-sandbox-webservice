pragma solidity >=0.4.22 <0.7.0; 
pragma experimental ABIEncoderV2; 

contract Event { 
    string eventName; 
    address public owner; 
    uint totalSales; 
     
    constructor() public { 
        owner = msg.sender; 
        totalSales = 0; 
    } 

    struct Scan { 
        string ticketid; 
        string name; 
        string date; 
    } 
     
    struct Ticket { 
        string ticketid; 
    } 
     
    struct User { 
        string ticketid; 
        string name; 
        string date; 
    } 
     
    mapping(string => Ticket) public tickets; 
    mapping(string => User[]) public purchasers; 
    mapping(string => Scan[]) public scans; 
     
    modifier isOwner() { 
        require(msg.sender == owner); 
        _; 
    } 
     
    function addTicket(string memory ticketId, string memory name, string memory today) public isOwner returns (bool){ 
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
        uint currentSales = totalSales;
        totalSales++;
        return currentSales < totalSales;
    } 

    function getTotalSales() public isOwner view returns (uint){ 
        return totalSales; 
    } 
     
    function addScan(string memory ticketId, string memory scanName, string memory today) public isOwner { 
        Scan memory newScan = Scan({ 
            ticketid: ticketId, 
            name: scanName, 
            date: today 
        }); 
        scans[ticketId].push(newScan); 
    }

    function getScans(string memory ticketId) public isOwner view returns (Scan[] memory){ 
        return scans[ticketId]; 
    } 

    function addPurchasers(string memory ticketId, string memory name, string memory today) public isOwner { 
        User memory purchaser = User({ 
            ticketid: ticketId, 
            name: name, 
            date: today 
        }); 
        purchasers[ticketId].push(purchaser); 
    } 

    function getPurchasers(string memory ticketId) public isOwner view returns (User[] memory){ 
        return purchasers[ticketId]; 
    } 
}