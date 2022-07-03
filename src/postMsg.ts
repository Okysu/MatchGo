export const NotificationCall = (type: string, title: string, message: string, duration: number = 1500) => {
    const post: string[] = [type, title, message, String(duration)];
    window.parent.postMessage(['NotificationCaller,' + post.join(',')]);
}