import React from 'react';
import InfoTileTitle from './components/InfoTileTitle';
import InfoTileItem from './components/InfoTileItem';
import { Card, Row, Col } from 'react-bootstrap';
import InfoTileValue from './components/InfoTileValue';
import InfoTileCol from './components/InfoTileCol';
var InfoTile = function (_a) {
    var icon = _a.icon, children = _a.children;
    return (React.createElement(Card, { className: "border-0 text-muted h-100 info-tile" },
        React.createElement(Row, { className: "g-0" },
            icon ? (React.createElement(Col, { xs: "auto", className: "px-4 d-none d-md-block info-tile-col" },
                React.createElement("div", { className: "segment p-4 h-100" },
                    React.createElement("i", { className: "bi bi-".concat(icon), style: { fontSize: '4rem' } })))) : null,
            React.createElement(Col, { className: "info-tile-col info-tile-body" },
                React.createElement(Card.Body, { className: "justify-content-between row" }, children)))));
};
InfoTile.Item = InfoTileItem;
InfoTile.Title = InfoTileTitle;
InfoTile.Value = InfoTileValue;
InfoTile.Col = InfoTileCol;
export default InfoTile;
//# sourceMappingURL=InfoTile.js.map