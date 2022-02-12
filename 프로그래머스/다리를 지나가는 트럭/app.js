function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let bridge = new Array(bridge_length).fill(0);
  let allTruckLen = truck_weights.length;
  let pulledTruck = 0;

  while (pulledTruck < allTruckLen) {
    let curPulledIdx = bridge.shift();

    if (curPulledIdx !== 0) {
      // 꺼낸 인덱스가 트럭이라면
      weight += curPulledIdx;
      pulledTruck++;
    }

    if (truck_weights.length && weight >= truck_weights[0]) {
      // 트럭이 지나갈 무게가 남았다면
      let curTruck = truck_weights.shift();
      bridge.push(curTruck);
      weight -= curTruck;
    } else {
      bridge.push(0);
    }

    answer++;
  }
  return answer;
}
