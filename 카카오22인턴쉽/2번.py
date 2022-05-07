from collections import deque

def solution(queue1, queue2):
    answer = 0

    q1_sum = sum(queue1)
    q2_sum = sum(queue2)
    dq1 = deque(queue1)
    dq2 = deque(queue2)

    while 1:
        if q1_sum == q2_sum :
            break
        if answer >= len(queue1)+len(queue2)+2:
            answer = -1
            break

        if q1_sum < q2_sum:
            value = dq2.popleft()
            dq1.append(value)

            q1_sum += value
            q2_sum -= value
        elif q1_sum > q2_sum:
            value = dq1.popleft()
            dq2.append(value)

            q1_sum -= value
            q2_sum += value

        answer += 1

    return answer