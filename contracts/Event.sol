pragma solidity >=0.4.22 <0.7.0; 
pragma experimental ABIEncoderV2; 

/** 
 * @title Event
 * @dev Implements storing transactions information for the event
 */
contract Event { 
    string public eventName; 
    address private owner; 
    uint public totalSales; 
    
    constructor() public { 
        owner = msg.sender; 
        totalSales = 0; 
    }

    struct Scan { 
        string ticketid; 
        string scanDescription; 
        string scannedAt; 
    } 
     
    struct Ticket { 
        string ticketid;
        string ticketOwner;
        uint ownerPosition;
    } 
     
    struct User { 
        string ticketid; 
        string userid; 
        string purchasedAt; 
    } 
     
    mapping(string => Ticket) public mapTickets; 
    mapping(string => User[]) public mapPurchasers; 
    mapping(string => Scan[]) public mapScans; 
     
    modifier isOwner() { 
        require(msg.sender == owner); 
        _; 
    } 
    
    modifier ticketExist(string memory ticketId){
        require(_ticketExist(ticketId));
        _;
    }
    
    function _ticketExist(string memory ticketId) private returns (bool){
        return bytes(mapTickets[ticketId].ticketid).length != 0;
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
     * @dev sell a new ticket for the event.
     * @param newTicketId value of the ticket ids for the event.
     * @param userId value of the new owner of the ticket.
     * @param purchasedAt date of the ticket purchase.
     */
    function addTicket(string memory newTicketId, string memory userId, string memory purchasedAt) public isOwner returns (bool){ 
            uint currentSales = totalSales;
            if(_ticketExist(newTicketId)) {
                revert();
                return false;
            }
            Ticket memory newTicket = Ticket({ 
                ticketid: newTicketId,
                ticketOwner: userId,
                ownerPosition: 0
            }); 
            mapTickets[newTicketId] = newTicket; 
            
            addPurchasers(newTicketId, userId, purchasedAt);
            totalSales++;
        return currentSales < totalSales;
    } 
     
     
    /**
     * @dev sell a list of new tickets for the event.
     * @param newTicketsId value of the tickets ids for the event.
     * @param usersId value of the new owner of the ticket.
     * @param purchasedAt date of the ticket purchase.
     */
    function addTicketLsit(string[] memory newTicketsId, string[] memory usersId, string[] memory purchasedAt) public isOwner returns (bool){ 
        uint currentSales = totalSales;
        uint ticketslength = newTicketsId.length;
        uint usersIdlength = usersId.length;
        uint purchasedAtlength = purchasedAt.length;
        if(purchasedAtlength != usersIdlength && usersIdlength != ticketslength) {
                revert();
                return false;
        }
        for (uint i=0; i<ticketslength; i++) {
            addTicket (newTicketsId[i], usersId[i], purchasedAt[i]);
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
     * @param scannedAt date of the ticket scaned.
     */
    function addScan(string memory ticketId, string memory scanName, string memory scannedAt) public isOwner ticketExist(ticketId) returns (bool){ 
        Scan memory newScan = Scan({ 
            ticketid: ticketId, 
            scanDescription: scanName, 
            scannedAt: scannedAt 
        }); 
        mapScans[ticketId].push(newScan); 
        return true;
    }

    /**
     * @dev show a list of scans for the ticket.
     * @param ticketId value of the ticket id for the event.
     */
    function getScans(string memory ticketId) public isOwner view returns (Scan[] memory){ 
        return mapScans[ticketId]; 
    } 

    /**
     * @dev add a new purchaser for the ticket.
     * @param ticketId value of the ticket id for the event.
     * @param userid id value of the new owner of the ticket.
     * @param purchasedAt date of the ticket purchase.
     */
    function addPurchasers(string memory ticketId, string memory userid, string memory purchasedAt) public isOwner ticketExist(ticketId) returns (bool){ 
        User memory purchaser = User({ 
            ticketid: ticketId, 
            userid: userid, 
            purchasedAt: purchasedAt 
        }); 
        mapPurchasers[ticketId].push(purchaser); 
        mapTickets[ticketId].ticketOwner = userid;
        mapTickets[ticketId].ownerPosition = mapPurchasers[ticketId].length-1;
        return true;
    } 

    /**
     * @dev show a list of purchasers for the ticket.
     * @param ticketId value of the ticket id for the event.
     */
    function getPurchasers(string memory ticketId) public isOwner view returns (User[] memory){ 
        return mapPurchasers[ticketId]; 
    } 
}