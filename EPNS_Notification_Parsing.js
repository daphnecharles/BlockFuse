import { NotificationItem } from  "@epnsproject/frontend-sdk-staging";

// This is used to render the text present in a notification body as a JSX element

<NotificationItem
    notificationTitle={parsedResponse.title}
    notificationBody={parsedResponse.message}
    cta={parsedResponse.cta}
    app={parsedResponse.app}
    icon={parsedResponse.icon}
    image={parsedResponse.image}
/>
