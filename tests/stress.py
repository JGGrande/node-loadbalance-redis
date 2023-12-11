import threading
import requests
import time
from faker import Faker
from datetime import timedelta

fake = Faker()

def make_request():
    MAX_REQUESTS = 3000
    requests_made = 0
    start_time = time.time()

    def request_thread():
        nonlocal requests_made
        while time.time() - start_time < 60 :
            try:
                data = {
                  "login": fake.user_name(),
                  "name": fake.name(),
                  "password": fake.password()
                }
                requests.post("http://localhost/user", json=data)

            except Exception as e:
                print(f"Erro na requisição: {e}")
            else:
                requests_made += 1

    threads = []

    for _ in range(10):
        thread = threading.Thread(target=request_thread)
        thread.start()
        threads.append(thread)


    for thread in threads:
        thread.join()

    print(f"Feitas {requests_made} requisições")

    end_time = time.time()

    print(f"Tempo total de execução: {timedelta(seconds=end_time - start_time)}")

if __name__ == "__main__":
    make_request()
