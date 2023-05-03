import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

function AssetFunctions() {
  return (
    <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Pay Funds into Escrow</div>
          Condiions for release specified
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Transfer of SPV shares</div>
             Shares are transferred when payment is received
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Release of Funds</div>
          Funds released or resolution via a dispute service. Tokens are transferred.
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default AssetFunctions;
