import React, {Component, PropTypes} from 'react';
import HTML from '../../utils/html-helper';
import UserAvatar from './user-avatar';
import StatusDot from './status-dot';
import Member from '../../core/models/member';

class MemberListItem extends Component {
    static propTypes = {
        member: PropTypes.instanceOf(Member).isRequired,
        avatarSize: PropTypes.number,
        showStatusDot: PropTypes.bool,
        className: PropTypes.string,
        avatarClassName: PropTypes.string,
    }

    static defaultProps = {
        avatarSize: 30,
        showStatusDot: true,
        className: 'flex-middle',
        avatarClassName: null,
    };

    render() {
        const {
            member,
            avatarSize,
            avatarClassName,
            showStatusDot,
            className,
            ...other
        } = this.props;

        return (<a
            {...other}
            className={HTML.classes('app-member-list-item item', className)}
        >
            <UserAvatar className={avatarClassName} size={avatarSize} user={member} />
            {showStatusDot && <StatusDot status={member.status} />}
            <div className="title">{member.displayName}</div>
        </a>);
    }
}

export default MemberListItem;
