pragma solidity >=0.4.22 <0.7.0; 
pragma experimental ABIEncoderV2; 

/** 
 * @title Event
 * @dev Implements storing transactions information for the event
 */
contract Event { 
    string public eventName; 
    address public owner; 
    uint public totalSales; 
     
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
        string purchaser;
        bool isValue;
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
    
    /**
     * @dev setNewEventName value in if the title is empty this will set the new event name
     * @param newEventName value to set the new event name
     */
    function setNewEventName(string memory newEventName) public isOwner returns (bool){
        if (bytes(eventName).length != 0){
            revert();
        }
        eventName = newEventName;
    }
     
     
    /**
     * @dev sell a list of new tickets for the event.
     * @param newTicketsId value of the tickets ids for the event.
     * @param names id value of the new owner of the ticket.
     * @param purchasedAt date of the ticket purchase.
     */
    function addTicket(string[] memory newTicketsId, string[] memory names, string[] memory purchasedAt) public isOwner returns (bool){ 
        uint currentSales = totalSales;
        uint ticketslength = newTicketsId.length;
        uint nameslength = names.length;
        uint purchasedAtlength = purchasedAt.length;
        if(purchasedAtlength != nameslength && nameslength != ticketslength) {
                revert();
                return false;
        }
        for (uint i=0; i<ticketslength; i++) {
            if(tickets[newTicketsId[i]].isValue) {
                revert();
                return false;
            }
            Ticket memory newTicket = Ticket({ 
                ticketid: newTicketsId[i],
                purchaser: names[i],
                isValue: true
            }); 
            tickets[newTicketsId[i]] = newTicket; 
            User memory purchaser = User({ 
                ticketid: newTicketsId[i], 
                name: names[i], 
                date: purchasedAt[i] 
            }); 
            purchasers[newTicketsId[i]].push(purchaser);
            totalSales++;
        }
        return currentSales < totalSales;
    } 
    
    
    /**
     * @dev show the amount of tickets sold.
     */
    function getTotalSales() public isOwner view returns (uint){ 
        return totalSales; 
    } 
    
    
    /**
     * @dev add a scan for the ticket.
     * @param ticketId value of the ticket id for the event.
     * @param scanName tiny description of the scan purpose for the ticket.
     * @param purchasedAt date of the ticket scaned.
     */
    function addScan(string memory ticketId, string memory scanName, string memory purchasedAt) public isOwner returns (bool){ 
        if (tickets[ticketId].isValue) {
            revert();
        }
        Scan memory newScan = Scan({ 
            ticketid: ticketId, 
            name: scanName, 
            date: purchasedAt 
        }); 
        scans[ticketId].push(newScan); 
        return true;
    }

    /**
     * @dev show a list of scans for the ticket.
     * @param ticketId value of the ticket id for the event.
     */
    function getScans(string memory ticketId) public isOwner view returns (Scan[] memory){ 
        return scans[ticketId]; 
    } 

    /**
     * @dev add a new purchaser for the ticket.
     * @param ticketId value of the ticket id for the event.
     * @param name id value of the new owner of the ticket.
     * @param purchasedAt date of the ticket purchase.
     */
    function addPurchasers(string memory ticketId, string memory name, string memory purchasedAt) public isOwner returns (bool){ 
        if (tickets[ticketId].isValue) {
            revert();
        }
        User memory purchaser = User({ 
            ticketid: ticketId, 
            name: name, 
            date: purchasedAt 
        }); 
        purchasers[ticketId].push(purchaser); 
        tickets[ticketId].purchaser = name;
        return true;
        
    } 

    /**
     * @dev show a list of purchasers for the ticket.
     * @param ticketId value of the ticket id for the event.
     */
    function getPurchasers(string memory ticketId) public isOwner view returns (User[] memory){ 
        return purchasers[ticketId]; 
    } 
}