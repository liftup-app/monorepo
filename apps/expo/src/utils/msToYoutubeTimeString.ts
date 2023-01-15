export default function msToYoutubeTimeString(milliseconds: number) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    minutes %= 60;
    seconds %= 60;

    const secondsString = seconds >= 10 ? String(seconds) : `0${seconds}`;
    const minutesString = minutes >= 10 ? String(minutes) : `0${minutes}`;

    return hours > 0
        ? `${hours}:${minutesString}:${secondsString}`
        : `${minutesString}:${secondsString}`;
}
