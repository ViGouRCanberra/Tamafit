export function zeroPad(i) {
    if (i < 10) {
        i = "0" + i;
    }

    return i;
}

export function diffHours(dt2, dt1) {
    var diff = (dt2.getTime() - new Date(dt1).getTime()) / 1000;
    diff /= (60 * 60);

    return Math.abs(Math.round(diff));
}