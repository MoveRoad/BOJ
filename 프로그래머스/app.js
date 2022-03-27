function solution(arr, processes) {
  let answer = [];

  // read t1,t2,A,B 요청시각,걸리는시간,arr[A]~arr[B]
  // write t1,t2,A,B,C arr[A]~arr[B] -> C로 변경
  // 요청시각은 1초부터 존재
  // 쓰기가 read보다 우선사항(같이 대기중일 시)
  // 쓰기가 대기중이면 읽기중에는 읽기 실행안됨
  // 쓰기가 대기하지 않고있다면 읽기중에 읽기 가능

  // 초 마다 운영되는 process
  // 프로세스가 없어질 때 까지 (마지막 요청 시간 계산 필요)

  let time = 1;
  let read = [];
  let write = [];
  let proc = [];
  while (processes.length || read.length || write.length || proc.length) {
    //쓰기 작업, 읽기 작업을 나눠놓기
    //쓰기가 있다면 진행 중이 끝날때까지 대기
    let temp;
    if (processes.length) {
      temp = processes[0].split(" ");

      //만약 프로세스 1번의 작업 시작시간이 time보다 작거나 같으면
      //작업 대기에 추가
      if (temp[1] <= time) {
        let oper = processes.shift().split(" ");
        if (oper[0] === "read") {
          read.push([oper[1], oper[2], oper[3], oper[4]]);
        } else {
          write.push([oper[1], oper[2], oper[3], oper[4], oper[5]]);
        }
      }
    }

    //쓰기가 존재하면 쓰기부터
    if (write.length) {
      //만약 작업중인 프로세스가 없고 t1이 현재 time보다 작거나같으면
      if (!proc.length && time >= write[0][0]) {
        let temp = write.shift();

        //프로세스에 작업 추가
        for (let i = 0; i < temp[1]; i++) {
          proc.push([time + i, "write"]);
        }

        //쓰기는 변경사항 바로적용
        for (let i = temp[2]; i <= temp[3]; i++) {
          arr[i] = temp[4];
        }
      }
    } else {
      //쓰기가 없는 상태에서
      //작업이 돌고있고, 작업이 쓰기라면
      if (proc.length && proc[0] === "write") {
      } else {
        // 그 외의 경우
        // 작업이 없거나, 작업이 쓰기가 아니면
        let tempTime = 0;
        while (read.length) {
          const readData = read.shift().map(Number);
          if (tempTime < readData[1]) tempTime = readData[1];

          let str = "";
          for (let i = readData[2]; i < readData[3] + 1; i++) {
            str += arr[i];
          }

          answer.push(str);
        }

        for (let i = 0; i < tempTime; i++) {
          proc.push(time + i);
        }
      }
    }

    const t = new Set(proc);
    proc = [...t];

    proc.shift();
    time++;
  }
  answer.push(time);
  console.log(answer);
  return answer;
}

solution(
  ["1", "2", "4", "3", "3", "4", "1", "5"],
  [
    "read 1 3 1 2",
    "read 2 6 4 7",
    "write 4 3 3 5 2",
    "read 5 2 2 5",
    "write 6 1 3 3 9",
    "read 9 1 0 7",
  ]
);
