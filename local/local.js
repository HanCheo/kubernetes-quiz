window.QUIZ_BANKS=window.QUIZ_BANKS||{};window.QUIZ_BANKS.local=[
  {
    "id": "local-001",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Container Runtimes",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "In a Kubernetes deployment, how does containerd differ from the Docker Engine?",
      "ko": "Kubernetes 배포 환경에서 containerd는 Docker Engine과 어떻게 다른가요?"
    },
    "choices": {
      "en": [
        "containerd is a container runtime that Docker Engine includes, providing both a container runtime and additional features, such as image building.",
        "Docker Engine is a container runtime designed for high scalability and availability, whereas containerd is limited to single-node deployments.",
        "containerd is a management tool that provides a user-friendly interface for managing containers, while Docker Engine is command-line based.",
        "Docker Engine is a container runtime while containerd includes both a container runtime and additional features like image building."
      ],
      "ko": [
        "containerd는 Docker Engine에 포함된 container runtime이며, Docker Engine은 container runtime과 함께 image building 같은 추가 기능을 제공한다.",
        "Docker Engine은 높은 확장성과 가용성을 위해 설계된 container runtime인 반면, containerd는 단일 노드 배포로 제한된다.",
        "containerd는 컨테이너 관리를 위한 사용자 친화적 인터페이스를 제공하는 관리 도구이고, Docker Engine은 command-line 기반이다.",
        "Docker Engine은 container runtime이고, containerd는 container runtime과 image building 같은 추가 기능을 모두 포함한다."
      ]
    },
    "answer": 0,
    "explain": {
      "en": "containerd is a lower-level container runtime responsible for tasks such as pulling images and managing container execution. Docker Engine includes containerd and adds higher-level capabilities such as image building, developer tooling, and a broader container management interface.",
      "ko": "containerd는 이미지를 pull하고 컨테이너를 실행하는 하위 수준의 CRI 호환 runtime이며, Docker Engine은 containerd를 내장하고 그 위에 image building, 개발자 도구 등 상위 기능을 추가한 것입니다. 3번 보기는 이 관계를 거꾸로 설명한 것으로, 추가 기능을 가진 쪽은 containerd가 아니라 Docker Engine입니다."
    },
    "ref": "https://kubernetes.io/docs/setup/production-environment/container-runtimes/"
  },
  {
    "id": "local-002",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "CI/CD",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What does \"continuous\" mean in the context of CI/CD?",
      "ko": "CI/CD 맥락에서 \"continuous\"는 무엇을 의미하나요?"
    },
    "choices": {
      "en": [
        "Frequent releases, Manual processes, Repeatable, Fast processing",
        "Periodic releases, Manual processes, Repeatable, Automated Processing",
        "Frequent releases, Automated processes, Repeatable, Fast processing",
        "Periodic releases, Automated processes, Repeatable, Automated processing"
      ],
      "ko": [
        "잦은 릴리스, 수동 프로세스, 반복 가능, 빠른 처리",
        "주기적 릴리스, 수동 프로세스, 반복 가능, 자동화된 처리",
        "잦은 릴리스, 자동화된 프로세스, 반복 가능, 빠른 처리",
        "주기적 릴리스, 자동화된 프로세스, 반복 가능, 자동화된 처리"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "\"Continuous\" in CI/CD implies that integration and delivery happen frequently through automated, repeatable, fast pipelines rather than on a fixed schedule. Options with \"manual processes\" or \"periodic releases\" contradict the automation and frequency that define continuous practices.",
      "ko": "CI/CD에서 \"continuous\"는 통합과 배포가 정해진 일정이 아니라 자동화되고 반복 가능하며 빠른 파이프라인을 통해 자주 이루어진다는 뜻입니다. \"수동 프로세스\"나 \"주기적 릴리스\"가 포함된 보기는 continuous 실천의 핵심인 자동화와 빈도에 어긋납니다."
    },
    "ref": "https://glossary.cncf.io/continuous-integration/"
  },
  {
    "id": "local-003",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Container Runtimes",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which of the following container runtime is planned to be deprecated in Kubernetes 1.20 and higher?",
      "ko": "다음 중 Kubernetes 1.20 이상에서 deprecated될 예정이었던 container runtime은 무엇인가요?"
    },
    "choices": {
      "en": [
        "cri-o",
        "docker",
        "podman",
        "containerd"
      ],
      "ko": [
        "cri-o",
        "docker",
        "podman",
        "containerd"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Kubernetes 1.20 deprecated dockershim, the built-in shim that let the kubelet use Docker Engine as a runtime, and it was removed in 1.24; containerd and CRI-O remain fully supported CRI runtimes. podman is not a Kubernetes runtime at all, so it is a distractor rather than a deprecated option.",
      "ko": "Kubernetes 1.20에서 kubelet이 Docker Engine을 runtime으로 사용하게 해주던 내장 shim인 dockershim이 deprecated되었고 1.24에서 제거되었습니다. containerd와 CRI-O는 계속 완전히 지원되는 CRI runtime이며, podman은 Kubernetes runtime이 아니므로 오답 유도용 보기입니다."
    },
    "ref": "https://kubernetes.io/blog/2020/12/02/dont-panic-kubernetes-and-docker/"
  },
  {
    "id": "local-004",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Node Components",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is the name of the Kubernetes agent that runs on each worker nodes?",
      "ko": "각 worker node에서 실행되는 Kubernetes agent의 이름은 무엇인가요?"
    },
    "choices": {
      "en": [
        "kubelet",
        "systemd",
        "kube-proxy",
        "pod"
      ],
      "ko": [
        "kubelet",
        "systemd",
        "kube-proxy",
        "pod"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The kubelet is the node agent that registers the node with the API server and ensures the containers described in PodSpecs are running and healthy. kube-proxy also runs on every node but handles Service networking rules, not pod lifecycle, so it is not the primary node agent.",
      "ko": "kubelet은 node를 API server에 등록하고 PodSpec에 정의된 컨테이너가 실행 중이며 정상 상태인지 보장하는 node agent입니다. kube-proxy도 모든 node에서 실행되지만 pod 생명주기가 아닌 Service 네트워킹 규칙을 담당하므로 핵심 node agent는 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/"
  },
  {
    "id": "local-005",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Service Networking",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What function does kube-proxy provide to a cluster?",
      "ko": "kube-proxy는 클러스터에 어떤 기능을 제공하나요?"
    },
    "choices": {
      "en": [
        "Implementing the Ingress resource type for application traffic.",
        "Forwarding data to the correct endpoints for Services.",
        "Managing data egress from the cluster nodes to the network.",
        "Managing access to the Kubernetes API."
      ],
      "ko": [
        "애플리케이션 트래픽을 위한 Ingress 리소스 타입을 구현한다.",
        "Service의 올바른 endpoint로 데이터를 전달한다.",
        "클러스터 node에서 네트워크로 나가는 데이터 egress를 관리한다.",
        "Kubernetes API에 대한 접근을 관리한다."
      ]
    },
    "answer": 1,
    "explain": {
      "en": "kube-proxy maintains iptables/IPVS/nftables rules on each node so that traffic sent to a Service's virtual IP is forwarded to one of the Service's backend endpoints. Ingress is implemented by a separate Ingress controller, not by kube-proxy.",
      "ko": "kube-proxy는 각 node에서 iptables/IPVS/nftables 규칙을 유지하여 Service의 가상 IP로 보낸 트래픽이 해당 Service의 backend endpoint 중 하나로 전달되도록 합니다. Ingress는 kube-proxy가 아니라 별도의 Ingress controller가 구현합니다."
    },
    "ref": "https://kubernetes.io/docs/reference/networking/virtual-ips/"
  },
  {
    "id": "local-006",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "Helm",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "When deploying an application using Helm, which flag deletes the installation on failure?",
      "ko": "Helm으로 애플리케이션을 배포할 때, 설치가 실패하면 해당 설치를 삭제하는 flag는 무엇입니까?"
    },
    "choices": {
      "en": [
        "--force",
        "--verify",
        "--wait",
        "--atomic"
      ],
      "ko": [
        "--force",
        "--verify",
        "--wait",
        "--atomic"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "The --atomic flag automatically rolls back and removes the Helm release when the installation fails. It also enables waiting for the deployment resources to become ready before considering the installation successful.",
      "ko": "--atomic flag는 설치가 실패하면 release를 삭제(롤백)하며, --wait를 암묵적으로 활성화하여 리소스가 ready 상태가 되어야 설치 성공으로 간주합니다. --wait만 사용하면 ready 상태를 기다리기만 할 뿐 실패한 release는 그대로 남습니다."
    },
    "ref": "https://helm.sh/docs/helm/helm_install/"
  },
  {
    "id": "local-007",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Namespaces",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What are the initial namespaces that Kubernetes starts with?",
      "ko": "Kubernetes가 시작 시 기본적으로 갖는 초기 namespace는 무엇입니까?"
    },
    "choices": {
      "en": [
        "default, kube-system, kube-public, kube-node-lease",
        "default, system, kube-public",
        "kube-default, kube-system, kube-main, kube-node-lease",
        "kube-default, system, kube-main, kube-primary"
      ],
      "ko": [
        "default, kube-system, kube-public, kube-node-lease",
        "default, system, kube-public",
        "kube-default, kube-system, kube-main, kube-node-lease",
        "kube-default, system, kube-main, kube-primary"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A new cluster starts with four namespaces: default, kube-system, kube-public, and kube-node-lease (which holds node heartbeat Lease objects). Names such as kube-default, kube-main, or system do not exist.",
      "ko": "새 클러스터는 default, kube-system, kube-public, kube-node-lease(노드 heartbeat용 Lease 객체 저장)의 네 가지 namespace로 시작합니다. kube-default, kube-main, system 같은 이름은 존재하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"
  },
  {
    "id": "local-008",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "Kustomize vs Helm",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "In Kubernetes application delivery, what is the main role of Kustomize compared to Helm?",
      "ko": "Kubernetes 애플리케이션 배포에서 Helm과 비교했을 때 Kustomize의 주요 역할은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Kustomize overlays configurations directly without templates, while Helm relies on templates to manage reusable charts.",
        "Kustomize handles external application dependencies automatically, whereas Helm requires manual dependency tracking.",
        "Kustomize is designed for installing new applications only, while Helm is intended for managing ongoing application upgrades.",
        "Kustomize is mainly used for creating Helm charts themselves, whereas Helm is used for deploying those charts into clusters."
      ],
      "ko": [
        "Kustomize는 template 없이 설정을 직접 overlay하는 반면, Helm은 template을 사용해 재사용 가능한 chart를 관리한다.",
        "Kustomize는 외부 애플리케이션 의존성을 자동으로 처리하는 반면, Helm은 수동으로 의존성을 추적해야 한다.",
        "Kustomize는 새 애플리케이션 설치 전용으로 설계되었고, Helm은 지속적인 애플리케이션 업그레이드 관리를 위한 것이다.",
        "Kustomize는 주로 Helm chart 자체를 만드는 데 사용되고, Helm은 그 chart를 클러스터에 배포하는 데 사용된다."
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Kustomize customizes standard Kubernetes YAML through bases, overlays, and patches without introducing a separate templating language. Helm packages applications as reusable charts and generates manifests from templates and supplied values.",
      "ko": "Kustomize는 templating 언어 없이 base, overlay, patch를 통해 일반 Kubernetes YAML을 커스터마이징하는 반면, Helm은 template과 values로 렌더링되는 재사용 가능한 chart로 애플리케이션을 패키징합니다. chart 의존성을 관리하는 것은 Kustomize가 아니라 Helm이므로 의존성 관련 보기는 반대입니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/"
  },
  {
    "id": "local-009",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Service Mesh",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which of the following is a primary use case of Istio in a Kubernetes cluster?",
      "ko": "다음 중 Kubernetes 클러스터에서 Istio의 주요 사용 사례는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Provide service mesh capabilities such as traffic management, observability, and security between services.",
        "To provide secure built-in database management features for application workloads.",
        "To manage and control the versions of container runtimes used on nodes between services.",
        "To provision and manage persistent storage volumes for stateful applications."
      ],
      "ko": [
        "서비스 간 traffic management, observability, security 같은 service mesh 기능을 제공한다.",
        "애플리케이션 워크로드를 위한 안전한 내장 데이터베이스 관리 기능을 제공한다.",
        "노드에서 사용되는 container runtime의 버전을 관리하고 제어한다.",
        "stateful 애플리케이션을 위한 persistent storage volume을 프로비저닝하고 관리한다."
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Istio is primarily used to implement a service mesh in Kubernetes, enabling advanced traffic management, observability, and security features for service-to-service communication without requiring changes to application code.",
      "ko": "Istio는 애플리케이션 코드 변경 없이 서비스 간 통신에 traffic management, observability, mTLS 기반 security를 추가하는 service mesh입니다. 데이터베이스, container runtime, storage를 관리하지 않습니다."
    },
    "ref": "https://istio.io/latest/docs/overview/what-is-istio/"
  },
  {
    "id": "local-010",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Supply Chain Security",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What does SBOM stand for?",
      "ko": "SBOM은 무엇의 약자입니까?"
    },
    "choices": {
      "en": [
        "Software Bill of Materials",
        "Software Bill Operations Management",
        "System Bill of Materials",
        "Security Baseline for Open Source Management"
      ],
      "ko": [
        "Software Bill of Materials",
        "Software Bill Operations Management",
        "System Bill of Materials",
        "Security Baseline for Open Source Management"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "SBOM stands for Software Bill of Materials, which is a formal inventory of the components, libraries, and dependencies included in a software artifact, used to improve transparency, security, and supply chain risk management.",
      "ko": "SBOM은 Software Bill of Materials의 약자로, 소프트웨어 아티팩트에 포함된 컴포넌트, 라이브러리, 의존성의 공식 목록이며 공급망 보안에 활용됩니다. 'System Bill of Materials'는 그럴듯하지만 잘못된 풀이입니다."
    },
    "ref": "https://www.cisa.gov/sbom"
  },
  {
    "id": "local-011",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Autoscaling",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which set of resources can receive automatic updates from the HorizontalPodAutoscaler?",
      "ko": "HorizontalPodAutoscaler로부터 자동 업데이트(스케일링)를 받을 수 있는 리소스 조합은 무엇입니까?"
    },
    "choices": {
      "en": [
        "DaemonSet, Deployment",
        "Pod, StatefulSet",
        "DaemonSet, StatefulSet",
        "Deployment, StatefulSet"
      ],
      "ko": [
        "DaemonSet, Deployment",
        "Pod, StatefulSet",
        "DaemonSet, StatefulSet",
        "Deployment, StatefulSet"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "The HorizontalPodAutoscaler is designed to automatically adjust the number of replicas for workload controllers that support scaling, such as Deployments and StatefulSets, based on observed metrics like CPU or memory utilization.",
      "ko": "HorizontalPodAutoscaler는 CPU·메모리 등 관측된 메트릭을 기반으로 scale 서브리소스를 제공하는 워크로드 리소스(Deployment, StatefulSet, ReplicaSet 등)의 replica 수를 조정합니다. DaemonSet은 노드당 하나의 Pod를 실행하고 단독 Pod는 replica 개념이 없으므로 HPA 대상이 될 수 없습니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/"
  },
  {
    "id": "local-012",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "CronJob",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "A CronJob is scheduled to run by a user every one hour. What happens in the cluster when it's time for this CronJob to run?",
      "ko": "사용자가 CronJob을 1시간마다 실행되도록 스케줄했습니다. 이 CronJob의 실행 시각이 되면 클러스터에서 어떤 일이 일어납니까?"
    },
    "choices": {
      "en": [
        "Kubelet watches API Server for CronJob objects. When it's time for a Job to run, it runs the Pod directly.",
        "Kube-scheduler watches API Server for CronJob objects, and this is why it's called kubescheduler.",
        "CronJob controller component creates a Pod and waits until it finishes to run.",
        "CronJob controller component creates a Job. Then the Job controller creates a Pod and waits until it finishes to run."
      ],
      "ko": [
        "Kubelet이 API Server에서 CronJob 객체를 watch하다가, Job 실행 시각이 되면 Pod를 직접 실행한다.",
        "Kube-scheduler가 API Server에서 CronJob 객체를 watch하며, 그래서 이름이 kube-scheduler이다.",
        "CronJob controller 컴포넌트가 Pod를 생성하고 실행이 끝날 때까지 기다린다.",
        "CronJob controller 컴포넌트가 Job을 생성하고, 이어서 Job controller가 Pod를 생성하여 실행이 끝날 때까지 기다린다."
      ]
    },
    "answer": 3,
    "explain": {
      "en": "When the schedule fires, the CronJob controller (in kube-controller-manager) creates a Job object, and the Job controller then creates the Pod(s) and tracks them to completion. The CronJob controller never creates Pods directly, and kube-scheduler only assigns Pods to nodes; it does not watch CronJobs.",
      "ko": "스케줄 시각이 되면 kube-controller-manager 내의 CronJob controller가 Job 객체를 생성하고, Job controller가 Pod를 생성하여 완료될 때까지 추적합니다. CronJob controller는 Pod를 직접 만들지 않으며, kube-scheduler는 Pod를 노드에 배치할 뿐 CronJob을 watch하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/"
  },
  {
    "id": "local-013",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Services Networking",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is the goal of load balancing?",
      "ko": "로드 밸런싱의 목표는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Automatically measure request performance across instances of an application.",
        "Automatically distribute requests across different versions of an application.",
        "Automatically distribute instances of an application across the cluster.",
        "Automatically distribute requests across instances of an application."
      ],
      "ko": [
        "애플리케이션 인스턴스 간 요청 성능을 자동으로 측정한다.",
        "애플리케이션의 서로 다른 버전 간에 요청을 자동으로 분산한다.",
        "애플리케이션 인스턴스를 클러스터 전체에 자동으로 분산 배치한다.",
        "애플리케이션 인스턴스 간에 요청을 자동으로 분산한다."
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Load balancing distributes incoming requests across the healthy instances (Pods) of an application so no single instance is overloaded, which is what a Kubernetes Service does. Spreading instances across nodes is scheduling, not load balancing, and routing between versions is traffic splitting/canary.",
      "ko": "로드 밸런싱은 들어오는 요청을 애플리케이션의 정상 인스턴스(Pod)들에 분산시켜 특정 인스턴스에 부하가 집중되지 않도록 하는 것으로, Kubernetes Service가 수행하는 역할입니다. 인스턴스를 노드에 분산 배치하는 것은 스케줄링이고, 버전 간 요청 분배는 트래픽 분할/카나리에 해당합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/service/"
  },
  {
    "id": "local-014",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Cluster Administration",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which of the following options is true about considerations for large Kubernetes clusters?",
      "ko": "대규모 Kubernetes 클러스터에 대한 고려 사항으로 옳은 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Kubernetes supports up to 1000 nodes and recommends no more than 1000 containers per node.",
        "Kubernetes supports up to 5000 nodes and recommends no more than 500 pods per node.",
        "Kubernetes supports up to 5000 nodes and recommends no more than 110 pods per node.",
        "Kubernetes supports up to 50 nodes and recommends no more than 1000 containers per node."
      ],
      "ko": [
        "Kubernetes는 최대 1000개 노드를 지원하며 노드당 1000개 이하의 컨테이너를 권장한다.",
        "Kubernetes는 최대 5000개 노드를 지원하며 노드당 500개 이하의 Pod를 권장한다.",
        "Kubernetes는 최대 5000개 노드를 지원하며 노드당 110개 이하의 Pod를 권장한다.",
        "Kubernetes는 최대 50개 노드를 지원하며 노드당 1000개 이하의 컨테이너를 권장한다."
      ]
    },
    "answer": 2,
    "explain": {
      "en": "The official large-cluster guidance states no more than 5,000 nodes, no more than 110 Pods per node, no more than 150,000 total Pods, and no more than 300,000 total containers. The 500-pods-per-node figure is not a documented limit, though kubelet's maxPods can be raised beyond 110.",
      "ko": "공식 대규모 클러스터 가이드는 노드 5,000개 이하, 노드당 Pod 110개 이하, 전체 Pod 150,000개 이하, 전체 컨테이너 300,000개 이하를 제시합니다. 노드당 500개 Pod는 문서화된 기준이 아니며, kubelet의 maxPods를 110 이상으로 늘릴 수는 있어도 권장값은 110입니다."
    },
    "ref": "https://kubernetes.io/docs/setup/best-practices/cluster-large/"
  },
  {
    "id": "local-015",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Orchestration Concepts",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which of the following characteristics is associated with container orchestration?",
      "ko": "다음 중 컨테이너 오케스트레이션과 관련된 특성은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Application message distribution",
        "Dynamic scheduling",
        "Deploying application JAR files",
        "Virtual Machine distribution"
      ],
      "ko": [
        "애플리케이션 메시지 분배",
        "동적 스케줄링",
        "애플리케이션 JAR 파일 배포",
        "가상 머신 분배"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Container orchestration automates the placement, scaling, and lifecycle of containers, and dynamic scheduling of containers onto available nodes is a core characteristic. Deploying JAR files or distributing VMs are build/infrastructure concerns outside the orchestrator's scope.",
      "ko": "컨테이너 오케스트레이션은 컨테이너의 배치, 스케일링, 생명주기를 자동화하며, 가용 노드에 컨테이너를 동적으로 스케줄링하는 것이 핵심 특성입니다. JAR 파일 배포나 가상 머신 분배는 빌드/인프라 영역으로 오케스트레이터의 범위가 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/"
  },
  {
    "id": "local-016",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Service DNS",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "In a Kubernetes cluster, how does DNS resolution work for services?",
      "ko": "Kubernetes 클러스터에서 Service에 대한 DNS 해석(resolution)은 어떻게 동작합니까?"
    },
    "choices": {
      "en": [
        "DNS resolution for services uses the IP addresses of the Pods directly.",
        "DNS resolution for services is handled by an external DNS provider that manages all service names .",
        "Kubernetes creates service names that resolve to stable cluster IPs.",
        "Service names in Kubernetes are resolved using environment variables set in each Pod."
      ],
      "ko": [
        "Service의 DNS 해석은 Pod의 IP 주소를 직접 사용합니다.",
        "Service의 DNS 해석은 모든 Service 이름을 관리하는 외부 DNS 제공자가 처리합니다.",
        "Kubernetes는 안정적인 cluster IP로 해석되는 Service 이름을 생성합니다.",
        "Kubernetes의 Service 이름은 각 Pod에 설정된 환경 변수를 통해 해석됩니다."
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Kubernetes DNS assigns each Service a stable DNS name that resolves to its cluster IP, allowing Pods to reliably communicate with the Service without depending on individual Pod IP addresses.",
      "ko": "클러스터 DNS(CoreDNS)는 모든 Service에 안정적인 DNS 이름(예: my-svc.my-namespace.svc.cluster.local)을 부여하고 이를 ClusterIP로 해석하므로, 클라이언트는 수시로 바뀌는 개별 Pod IP에 의존하지 않습니다. 환경 변수도 Pod에 주입되지만 이는 DNS 해석 방식이 아니며, Pod 시작 이전에 생성된 Service만 포함됩니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/"
  },
  {
    "id": "local-017",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Container Runtime",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "The Container Runtime Interface (CRI) defines the protocol for the communication between:",
      "ko": "Container Runtime Interface(CRI)는 다음 중 어느 구성 요소 간의 통신 프로토콜을 정의합니까?"
    },
    "choices": {
      "en": [
        "The kubelet and the container runtime.",
        "The container runtime and etcd.",
        "The kube-apiserver and the kubelet.",
        "The container runtime and the image registry."
      ],
      "ko": [
        "kubelet과 container runtime",
        "container runtime과 etcd",
        "kube-apiserver와 kubelet",
        "container runtime과 image registry"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The CRI is a gRPC-based plugin interface that lets the kubelet talk to any compatible container runtime (containerd, CRI-O) without recompilation. The kubelet communicates with the kube-apiserver over the Kubernetes REST API, not CRI.",
      "ko": "CRI는 kubelet이 재컴파일 없이 호환되는 모든 container runtime(containerd, CRI-O 등)과 통신할 수 있게 하는 gRPC 기반 플러그인 인터페이스입니다. kubelet과 kube-apiserver 간 통신은 CRI가 아니라 Kubernetes REST API로 이루어집니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/architecture/cri/"
  },
  {
    "id": "local-018",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "Debugging",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which command inspects environment variables inside a running Pod?",
      "ko": "실행 중인 Pod 내부의 환경 변수를 확인하는 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl get <pod> --show-env",
        "kubectl get pods -o yaml",
        "kubectl logs -- env",
        "kubectl exec <pod> -- env"
      ],
      "ko": [
        "kubectl get <pod> --show-env",
        "kubectl get pods -o yaml",
        "kubectl logs -- env",
        "kubectl exec <pod> -- env"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "kubectl exec runs a command inside a container in the running Pod. Executing env displays the environment variables available within that container.",
      "ko": "kubectl exec는 실행 중인 Pod의 컨테이너 안에서 명령을 실행하므로 `kubectl exec <pod> -- env`는 런타임에 주입된 변수(예: Service 링크)를 포함한 실제 환경 변수를 출력합니다. `kubectl get pods -o yaml`은 spec에 선언된 env 항목만 보여줄 뿐 실제 적용된 전체 환경을 보여주지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/debug/debug-application/get-shell-running-container/"
  },
  {
    "id": "local-019",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Pod Lifecycle",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which of these is a valid container restart policy?",
      "ko": "다음 중 유효한 container restart policy는 무엇입니까?"
    },
    "choices": {
      "en": [
        "On login",
        "On update",
        "On start",
        "On failure"
      ],
      "ko": [
        "On login",
        "On update",
        "On start",
        "On failure"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "The valid restartPolicy values are Always (default), OnFailure and Never; OnFailure restarts a container only when it exits with a non-zero status. The other options are not Kubernetes restart policies.",
      "ko": "유효한 restartPolicy 값은 Always(기본값), OnFailure, Never이며, OnFailure는 컨테이너가 0이 아닌 상태 코드로 종료될 때만 재시작합니다. 나머지 보기는 Kubernetes restart policy가 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#restart-policy"
  },
  {
    "id": "local-020",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Service Ports",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Can a Kubernetes Service expose multiple ports?",
      "ko": "Kubernetes Service는 여러 개의 port를 노출할 수 있습니까?"
    },
    "choices": {
      "en": [
        "No, you can only expose one port per each Service.",
        "Yes, but you must specify an unambiguous name for each port.",
        "Yes, the only requirement is to use different port numbers.",
        "No, because the only port you can expose is port number 443."
      ],
      "ko": [
        "아니요, Service당 하나의 port만 노출할 수 있습니다.",
        "예, 단 각 port에 중복되지 않는 고유한 이름을 지정해야 합니다.",
        "예, 유일한 요구 사항은 서로 다른 port 번호를 사용하는 것입니다.",
        "아니요, 노출할 수 있는 port는 443번뿐입니다."
      ]
    },
    "answer": 1,
    "explain": {
      "en": "A Service can expose multiple ports, but when more than one port is defined every port must have a unique name so the entries are unambiguous. Using different port numbers alone is not sufficient because the API rejects multi-port Services with unnamed ports.",
      "ko": "Service는 여러 port를 노출할 수 있지만, port가 둘 이상 정의되면 각 항목이 명확히 구분되도록 모든 port에 고유한 이름을 지정해야 합니다. 이름 없이 port 번호만 다르게 지정하면 API가 multi-port Service를 거부하므로 번호만 다르게 하는 것으로는 충분하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/service/#multi-port-services"
  },
  {
    "id": "local-021",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Namespaces",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which of the following sentences is true about namespaces in Kubernetes?",
      "ko": "Kubernetes의 namespace에 대한 설명으로 옳은 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "You can create a namespace within another namespace in Kubernetes.",
        "You can create two resources of the same kind and name in a namespace.",
        "The default namespace exists when a new cluster is created.",
        "All the objects in the cluster are namespaced by default."
      ],
      "ko": [
        "Kubernetes에서는 namespace 안에 또 다른 namespace를 생성할 수 있다.",
        "하나의 namespace 안에 같은 kind와 같은 이름을 가진 리소스를 두 개 생성할 수 있다.",
        "새 클러스터가 생성되면 default namespace가 기본적으로 존재한다.",
        "클러스터의 모든 객체는 기본적으로 namespace에 속한다."
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Every new cluster starts with the default namespace (along with kube-system, kube-public and kube-node-lease). Namespaces cannot be nested, names must be unique per kind within a namespace, and cluster-scoped objects such as Nodes and PersistentVolumes are not namespaced.",
      "ko": "새 클러스터에는 default namespace가 (kube-system, kube-public, kube-node-lease와 함께) 기본으로 생성됩니다. namespace는 중첩할 수 없고, 한 namespace 안에서 같은 kind의 이름은 고유해야 하며, Node나 PersistentVolume 같은 cluster-scoped 객체는 namespace에 속하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"
  },
  {
    "id": "local-022",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Autoscaling",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which tools enable Kubernetes HorizontalPodAutoscalers to use custom, applicationgenerated metrics to trigger scaling events?",
      "ko": "Kubernetes HorizontalPodAutoscaler가 애플리케이션에서 생성한 커스텀 메트릭을 기반으로 스케일링을 수행하도록 해주는 도구는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Prometheus and the prometheus-adapter.",
        "Graylog and graylog-autoscaler metrics.",
        "Graylog and the kubernetes-adapter.",
        "Grafana and Prometheus."
      ],
      "ko": [
        "Prometheus와 prometheus-adapter",
        "Graylog와 graylog-autoscaler metrics",
        "Graylog와 kubernetes-adapter",
        "Grafana와 Prometheus"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The HPA reads custom metrics through the custom.metrics.k8s.io API, which prometheus-adapter implements by exposing metrics scraped by Prometheus. Grafana is only a visualization tool and does not serve the metrics API.",
      "ko": "HPA는 custom.metrics.k8s.io API를 통해 커스텀 메트릭을 읽으며, prometheus-adapter가 Prometheus가 수집한 메트릭을 이 API로 노출합니다. Grafana는 시각화 도구일 뿐 metrics API를 제공하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/run-application/horizontal-pod-autoscale/"
  },
  {
    "id": "local-023",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Node maintenance",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which of the following commands could a cluster administrator use to prevent Pod scheduling in a node temporarily, for maintenance purposes?",
      "ko": "클러스터 관리자가 유지보수를 위해 특정 node에 Pod가 스케줄링되지 않도록 일시적으로 막을 때 사용할 수 있는 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl cordon",
        "kubectl annotate",
        "kubectl label",
        "kubectl taint"
      ],
      "ko": [
        "kubectl cordon",
        "kubectl annotate",
        "kubectl label",
        "kubectl taint"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The kubectl cordon command marks a node as unschedulable, temporarily preventing new Pods from being scheduled on it while allowing existing Pods to continue running during maintenance.",
      "ko": "kubectl cordon은 node를 unschedulable로 표시하여 새 Pod가 배치되지 않게 하며 기존 Pod는 계속 실행됩니다. kubectl uncordon으로 되돌릴 수 있습니다. NoSchedule taint로도 스케줄링을 막을 수 있지만, cordon이 유지보수 목적의 전용 명령입니다(보통 kubectl drain과 함께 사용)."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_cordon/"
  },
  {
    "id": "local-024",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "kubectl",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which of these commands is used to retrieve the documentation and field definitions for a Kubernetes resource?",
      "ko": "Kubernetes 리소스의 문서와 필드 정의를 조회할 때 사용하는 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl explain",
        "kubectl api-resources",
        "kubectl get --help",
        "kubectl show"
      ],
      "ko": [
        "kubectl explain",
        "kubectl api-resources",
        "kubectl get --help",
        "kubectl show"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "kubectl explain prints the documentation and field schema of a resource (e.g. kubectl explain pod.spec.containers). kubectl api-resources only lists available resource types, and kubectl show does not exist.",
      "ko": "kubectl explain은 리소스의 문서와 필드 스키마를 출력합니다(예: kubectl explain pod.spec.containers). kubectl api-resources는 사용 가능한 리소스 종류만 나열하며, kubectl show는 존재하지 않는 명령입니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_explain/"
  },
  {
    "id": "local-025",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "SRE roles",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "In a cloud native environment, who is usually responsible for maintaining the workloads running across the different platforms?",
      "ko": "클라우드 네이티브 환경에서 여러 플랫폼에 걸쳐 실행되는 워크로드를 유지·관리하는 책임은 일반적으로 누구에게 있습니까?"
    },
    "choices": {
      "en": [
        "The cloud provider.",
        "The Site Reliability Engineering (SRE) team.",
        "The team of developers.",
        "The Support Engineering team (SE)."
      ],
      "ko": [
        "클라우드 제공자",
        "Site Reliability Engineering (SRE) 팀",
        "개발자 팀",
        "Support Engineering (SE) 팀"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "In cloud native environments, the Site Reliability Engineering (SRE) team is typically responsible for maintaining and ensuring the reliability of workloads across different platforms.",
      "ko": "SRE 팀은 SLO, 자동화, 장애 대응을 통해 여러 플랫폼에서 실행되는 워크로드의 운영과 신뢰성을 책임집니다. 개발자는 애플리케이션을 만들고, 클라우드 제공자는 공동 책임 모델에 따라 기반 인프라만 담당합니다."
    },
    "ref": "https://sre.google/sre-book/introduction/"
  },
  {
    "id": "local-026",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "RBAC",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which statement is correct about Role and ClusterRole objects in Kubernetes?",
      "ko": "Kubernetes의 Role과 ClusterRole 객체에 대한 설명으로 올바른 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Roles can only set permissions for resources within a particular namespace.",
        "ClusterRoles and Roles can remove permissions from resources within a namespace.",
        "ClusterRoles can only set permissions for resources that are not assigned to a namespace.",
        "Roles can set permissions for both namespaced and non-namespaced objects."
      ],
      "ko": [
        "Role은 특정 namespace 내의 리소스에 대해서만 권한을 설정할 수 있다.",
        "ClusterRole과 Role은 namespace 내 리소스에서 권한을 제거할 수 있다.",
        "ClusterRole은 namespace에 속하지 않는 리소스에 대해서만 권한을 설정할 수 있다.",
        "Role은 namespaced 객체와 non-namespaced 객체 모두에 대해 권한을 설정할 수 있다."
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A Role defines permissions that apply only within a specific namespace, limiting its scope to resources in that namespace.",
      "ko": "Role은 namespace 범위의 객체로, 자신이 속한 namespace 내의 리소스에 대해서만 권한을 부여할 수 있습니다. ClusterRole은 클러스터 범위 리소스에만 한정되지 않고 모든 namespace의 namespaced 리소스에 대한 접근도 부여할 수 있으며, RBAC는 순수하게 추가(additive) 방식이므로 어떤 객체도 권한을 제거할 수 없습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/rbac/"
  },
  {
    "id": "local-027",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Pod lifecycle",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What happens with a regular pod running in Kubernetes when a node fails?",
      "ko": "Kubernetes에서 실행 중인 일반적인 Pod는 node에 장애가 발생하면 어떻게 됩니까?"
    },
    "choices": {
      "en": [
        "A new pod with the same UID is scheduled to another node after a while.",
        "A new, near-identical pod but with different UID is scheduled to another node.",
        "By default, a pod can only be scheduled to the same node when the node fails.",
        "A new pod is scheduled on a different node only if it is configured explicitly."
      ],
      "ko": [
        "잠시 후 동일한 UID를 가진 새 Pod가 다른 node에 스케줄링된다.",
        "UID는 다르지만 거의 동일한 새 Pod가 다른 node에 스케줄링된다.",
        "기본적으로 node 장애 시 Pod는 동일한 node에만 스케줄링될 수 있다.",
        "명시적으로 구성된 경우에만 새 Pod가 다른 node에 스케줄링된다."
      ]
    },
    "answer": 1,
    "explain": {
      "en": "When a node fails, Kubernetes schedules a new pod with a different UID (a new instance) on another available node to replace the failed pod.",
      "ko": "Pod(UID로 식별됨)는 생애 동안 단 한 번만 스케줄링되며 다른 node로 옮겨지지 않습니다. node 장애 시 해당 Pod는 삭제되고, 이를 관리하는 컨트롤러(예: Deployment, ReplicaSet)가 다른 UID를 가진 거의 동일한 새 Pod를 다른 node에 생성합니다. 동일한 UID는 절대 재사용되지 않으므로 첫 번째 선택지는 틀렸습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/"
  },
  {
    "id": "local-028",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Containerization standards",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is the main purpose of the Open Container Initiative (OCI)?",
      "ko": "Open Container Initiative(OCI)의 주요 목적은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Accelerating the adoption of containers and Kubernetes in the industry.",
        "Creating open industry standards around container formats and runtimes.",
        "Creating industry standards around container formats and runtimes for private purposes.",
        "Improving the security of standards around container formats and runtimes"
      ],
      "ko": [
        "업계에서 컨테이너와 Kubernetes의 도입을 가속화하는 것",
        "컨테이너 포맷과 런타임에 관한 개방형 산업 표준을 만드는 것",
        "사적인 용도를 위해 컨테이너 포맷과 런타임에 관한 산업 표준을 만드는 것",
        "컨테이너 포맷과 런타임 표준의 보안을 향상시키는 것"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The Open Container Initiative (OCI) focuses on creating open industry standards for container formats and runtimes to ensure interoperability and consistency across implementations.",
      "ko": "OCI는 Linux Foundation 산하 프로젝트로, 상호 운용성을 보장하기 위해 컨테이너 포맷과 런타임에 대한 개방형 산업 표준(image-spec, runtime-spec, distribution-spec)을 만드는 것이 목적입니다. Kubernetes 도입 가속화는 OCI가 아니라 CNCF의 사명입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/containers/"
  },
  {
    "id": "local-029",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Troubleshooting",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "A Kubernetes Pod is returning a CrashLoopBackOff status. What is the most likely reason for this behavior?",
      "ko": "Kubernetes Pod가 CrashLoopBackOff 상태를 반환하고 있습니다. 이러한 동작의 가장 가능성 높은 원인은 무엇입니까?"
    },
    "choices": {
      "en": [
        "The container's image is missing or cannot be pulled.",
        "There are insufficient resources allocated for the Pod.",
        "The Pod is unable to communicate with the Kubernetes API server.",
        "The application inside the container crashed after starting."
      ],
      "ko": [
        "컨테이너 이미지가 없거나 pull할 수 없다.",
        "Pod에 할당된 리소스가 부족하다.",
        "Pod가 Kubernetes API server와 통신할 수 없다.",
        "컨테이너 내부의 애플리케이션이 시작된 후 crash했다."
      ]
    },
    "answer": 3,
    "explain": {
      "en": "CrashLoopBackOff occurs when a container starts successfully but then terminates due to the application crashing or exiting unexpectedly, causing Kubernetes to repeatedly restart the container with increasing backoff delays.",
      "ko": "CrashLoopBackOff는 컨테이너가 시작된 후 반복적으로 종료되거나 crash하여 kubelet이 지수적으로 증가하는 backoff 지연을 두고 재시작하고 있음을 의미합니다. 이미지가 없거나 pull할 수 없는 경우에는 ImagePullBackOff/ErrImagePull이 표시되고, 리소스 부족은 보통 Pod를 Pending 상태로 남겨둡니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/"
  },
  {
    "id": "local-030",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Workloads",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Imagine there is a requirement to run a database backup every day. Which Kubernetes resource could be used to achieve that?",
      "ko": "매일 데이터베이스 백업을 실행해야 하는 요구 사항이 있다고 가정합시다. 이를 달성하기 위해 사용할 수 있는 Kubernetes 리소스는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Kube-scheduler",
        "CronJob",
        "Task",
        "Job"
      ],
      "ko": [
        "Kube-scheduler",
        "CronJob",
        "Task",
        "Job"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "A CronJob creates Jobs on a repeating schedule defined in Cron format, making it the right resource for a daily backup. A plain Job runs a task only once to completion, and Task is not a Kubernetes resource kind.",
      "ko": "CronJob은 Cron 형식으로 정의된 반복 일정에 따라 Job을 생성하므로 매일 백업을 수행하기에 적합한 리소스입니다. 일반 Job은 작업을 한 번만 완료까지 실행하며, Task는 Kubernetes 리소스 종류가 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/"
  },
  {
    "id": "local-031",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Semantic Versioning",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Imagine you're releasing open-source software for the first time. Which of the following is a valid semantic version?",
      "ko": "오픈소스 소프트웨어를 처음 릴리스한다고 가정해 봅시다. 다음 중 유효한 semantic version은 무엇입니까?"
    },
    "choices": {
      "en": [
        "1.0",
        "2021-10-11",
        "0.1.0-rc",
        "v1beta1"
      ],
      "ko": [
        "1.0",
        "2021-10-11",
        "0.1.0-rc",
        "v1beta1"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Semantic Versioning requires MAJOR.MINOR.PATCH with an optional pre-release suffix, so 0.1.0-rc is valid. \"1.0\" is tempting but is missing the PATCH component, and \"v1beta1\" is a Kubernetes API version string, not SemVer.",
      "ko": "Semantic Versioning은 MAJOR.MINOR.PATCH 형식에 선택적으로 pre-release 접미사를 붙이므로 0.1.0-rc는 유효합니다. \"1.0\"은 PATCH 부분이 없어 유효하지 않고, \"v1beta1\"은 Kubernetes API 버전 표기이지 SemVer가 아닙니다."
    },
    "ref": "https://semver.org/"
  },
  {
    "id": "local-032",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Troubleshooting Logs",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "If kubectl is failing to retrieve information from the cluster, where can you find pod logs to troubleshoot?",
      "ko": "kubectl로 클러스터에서 정보를 가져오지 못하는 상황이라면, 트러블슈팅을 위해 Pod 로그를 어디에서 찾을 수 있습니까?"
    },
    "choices": {
      "en": [
        "/var/log/pods/",
        "~/.kube/config",
        "/var/log/k8s/",
        "/etc/kubernetes/"
      ],
      "ko": [
        "/var/log/pods/",
        "~/.kube/config",
        "/var/log/k8s/",
        "/etc/kubernetes/"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Pod logs on the node are typically stored under /var/log/pods/, which can be accessed to troubleshoot issues when kubectl cannot retrieve logs directly from the cluster.",
      "ko": "kubelet은 각 노드의 /var/log/pods/ 아래에 컨테이너 로그를 기록하므로(/var/log/containers/에는 심볼릭 링크가 있음), kubectl logs를 사용할 수 없을 때 노드에서 직접 읽을 수 있습니다. ~/.kube/config는 클라이언트 kubeconfig이고 /etc/kubernetes/에는 control plane 매니페스트와 인증서가 있을 뿐 Pod 로그는 없습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/cluster-administration/logging/"
  },
  {
    "id": "local-033",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Ephemeral Storage",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is ephemeral storage?",
      "ko": "ephemeral storage란 무엇입니까?"
    },
    "choices": {
      "en": [
        "Storage space that need not persist across restarts.",
        "Storage that may grow dynamically.",
        "Storage used by multiple consumers (e.g. multiple Pods).",
        "Storage that is always provisioned locally"
      ],
      "ko": [
        "재시작 후에도 유지될 필요가 없는 스토리지 공간.",
        "동적으로 늘어날 수 있는 스토리지.",
        "여러 소비자(예: 여러 Pod)가 함께 사용하는 스토리지.",
        "항상 로컬에 프로비저닝되는 스토리지."
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Ephemeral storage (e.g. emptyDir, container writable layers) lives with the Pod and is discarded when the Pod is deleted or restarted, so it does not need to persist. \"Always provisioned locally\" is tempting, but ephemeral volumes can also be backed by CSI drivers and locality is not the defining property.",
      "ko": "ephemeral storage(예: emptyDir, 컨테이너 쓰기 레이어)는 Pod와 수명을 같이하며 Pod가 삭제되거나 재시작되면 사라지므로 지속될 필요가 없습니다. \"항상 로컬에 프로비저닝\"은 그럴듯하지만, ephemeral volume은 CSI 드라이버로도 제공될 수 있어 로컬 여부가 핵심 특성은 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/storage/ephemeral-volumes/"
  },
  {
    "id": "local-034",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Services",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is a Service?",
      "ko": "Service란 무엇입니까?"
    },
    "choices": {
      "en": [
        "A static network mapping from a Pod to a port.",
        "A way to expose an application running on a set of Pods.",
        "The network configuration for a group of Pods.",
        "An NGINX load balancer that gets deployed for an application."
      ],
      "ko": [
        "Pod에서 포트로의 정적 네트워크 매핑.",
        "여러 Pod에서 실행 중인 애플리케이션을 노출하는 방법.",
        "Pod 그룹에 대한 네트워크 구성.",
        "애플리케이션을 위해 배포되는 NGINX 로드 밸런서."
      ]
    },
    "answer": 1,
    "explain": {
      "en": "A Service is an abstraction that exposes an application running on a set of Pods behind a stable IP/DNS name, selecting Pods by label. It is not tied to a single Pod or to any specific load balancer implementation such as NGINX (that would be an Ingress controller).",
      "ko": "Service는 label로 선택한 여러 Pod에서 실행되는 애플리케이션을 안정적인 IP/DNS 이름으로 노출하는 추상화입니다. 단일 Pod에 묶이지 않으며 NGINX 같은 특정 로드 밸런서 구현체(그것은 Ingress controller에 해당)도 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/service/"
  },
  {
    "id": "local-035",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Annotations",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "In Kubernetes, what is the primary purpose of using annotations?",
      "ko": "Kubernetes에서 annotation을 사용하는 주된 목적은 무엇입니까?"
    },
    "choices": {
      "en": [
        "To specify the deployment strategy for applications.",
        "To control the access permissions for users and service accounts.",
        "To provide a way to attach metadata to objects.",
        "To define the specifications for resource limits and requests."
      ],
      "ko": [
        "애플리케이션의 배포 전략을 지정하기 위해.",
        "사용자와 service account의 접근 권한을 제어하기 위해.",
        "오브젝트에 메타데이터를 첨부하는 방법을 제공하기 위해.",
        "리소스 limit과 request 사양을 정의하기 위해."
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Annotations are used to attach arbitrary, non-identifying metadata to Kubernetes objects, allowing tools and users to store additional information that is not used for selection or scheduling.",
      "ko": "Annotation은 도구나 라이브러리가 활용할 수 있도록 오브젝트에 임의의 비식별 메타데이터를 첨부하며, label과 달리 선택이나 스케줄링에 사용되지 않습니다. 배포 전략과 리소스 request/limit은 annotation이 아니라 오브젝트 spec에 정의됩니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/"
  },
  {
    "id": "local-036",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Kubernetes API · 정책 정정 · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Under the current Kubernetes deprecation policy, what happens to a deprecated GA API version within the same major version of Kubernetes?",
      "ko": "현재 Kubernetes deprecation policy에 따르면 같은 Kubernetes major version 내에서 deprecated된 GA API version은 어떻게 됩니까?"
    },
    "choices": {
      "en": [
        "It must remain available within that Kubernetes major version",
        "It may be removed after 9 months",
        "It may be removed after 12 months",
        "It may be removed in the next patch release"
      ],
      "ko": [
        "해당 Kubernetes major version 동안 계속 제공되어야 합니다",
        "9개월 후 제거될 수 있습니다",
        "12개월 후 제거될 수 있습니다",
        "다음 patch release에서 제거될 수 있습니다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Rule 1 says API elements cannot be removed within an API group version. Rule 4a separately says GA API versions may be deprecated but must not be removed within a Kubernetes major version. Therefore a deprecated GA version remains available for that Kubernetes major version; this is not a 9-month or 12-month timer and not a next-patch removal rule. Do not confuse an API group/version with the Kubernetes project major version.",
      "ko": "Rule 1은 API group version 안에서 API element를 제거할 수 없다고 규정합니다. 별도로 Rule 4a는 GA API version을 deprecate할 수는 있지만 Kubernetes major version 안에서는 제거해서는 안 된다고 규정합니다. 따라서 deprecated된 GA version은 해당 Kubernetes major version 동안 제공되어야 하며, 9개월 또는 12개월 timer나 다음 patch에서 제거하는 규칙이 아닙니다. API group/version과 Kubernetes project major version을 혼동하지 마십시오."
    },
    "ref": "https://kubernetes.io/docs/reference/deprecation-policy/"
  },
  {
    "id": "local-037",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Kubernetes Distributions",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is the name of the lightweight Kubernetes distribution built for IoT and edge computing?",
      "ko": "IoT와 edge computing을 위해 만들어진 경량 Kubernetes 배포판의 이름은 무엇입니까?"
    },
    "choices": {
      "en": [
        "OpenShift",
        "k3s",
        "RKE",
        "k1s"
      ],
      "ko": [
        "OpenShift",
        "k3s",
        "RKE",
        "k1s"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "k3s (Rancher/SUSE, a CNCF sandbox project) is a single-binary, lightweight certified Kubernetes distribution designed for edge, IoT and resource-constrained environments. OpenShift is Red Hat's enterprise platform, RKE is Rancher's full distribution, k1s does not exist.",
      "ko": "k3s(Rancher/SUSE, CNCF sandbox)는 단일 바이너리로 동작하는 경량 인증 Kubernetes 배포판으로 edge·IoT·저사양 환경을 겨냥합니다. OpenShift는 Red Hat 엔터프라이즈 플랫폼, RKE는 Rancher의 일반 배포판이며 k1s는 존재하지 않습니다."
    },
    "ref": "https://k3s.io/"
  },
  {
    "id": "local-038",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Autoscaling",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Kubernetes ___ allows you to automatically manage the number of nodes in your cluster to meet demand.",
      "ko": "Kubernetes ___ 는 수요에 맞춰 클러스터의 노드 수를 자동으로 조절해 줍니다."
    },
    "choices": {
      "en": [
        "Node Autoscaler",
        "Cluster Autoscaler",
        "Horizontal Pod Autoscaler",
        "Vertical Pod Autoscaler"
      ],
      "ko": [
        "Node Autoscaler",
        "Cluster Autoscaler",
        "Horizontal Pod Autoscaler",
        "Vertical Pod Autoscaler"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Cluster Autoscaler adds nodes when Pods are Pending for lack of resources and removes underutilized nodes. HPA scales the number of Pod replicas, VPA adjusts Pod resource requests/limits; 'Node Autoscaler' is not a Kubernetes component.",
      "ko": "Cluster Autoscaler는 리소스 부족으로 Pending인 Pod가 있으면 노드를 추가하고, 사용률이 낮은 노드는 제거합니다. HPA는 Pod replica 수, VPA는 Pod의 request/limit을 조절하며 'Node Autoscaler'라는 컴포넌트는 없습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/cluster-administration/cluster-autoscaling/"
  },
  {
    "id": "local-039",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Security / Policy",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which of the following statements is correct concerning Open Policy Agent (OPA)?",
      "ko": "Open Policy Agent(OPA)에 관한 설명으로 올바른 것은?"
    },
    "choices": {
      "en": [
        "The policies must be written in Python language.",
        "Kubernetes can use it to validate requests and apply policies.",
        "Policies can only be tested when published.",
        "It cannot be used outside Kubernetes."
      ],
      "ko": [
        "정책은 반드시 Python 언어로 작성해야 한다.",
        "Kubernetes가 요청을 검증하고 정책을 적용하는 데 사용할 수 있다.",
        "정책은 배포된 뒤에만 테스트할 수 있다.",
        "Kubernetes 밖에서는 사용할 수 없다."
      ]
    },
    "answer": 1,
    "explain": {
      "en": "OPA (CNCF graduated) is a general-purpose policy engine; in Kubernetes it runs as an admission webhook (e.g. OPA Gatekeeper) to validate or mutate API requests. Policies are written in Rego, can be unit-tested locally with `opa test`, and OPA is also used for microservices, Terraform, CI pipelines, etc.",
      "ko": "OPA(CNCF graduated)는 범용 정책 엔진으로, Kubernetes에서는 admission webhook(OPA Gatekeeper 등)으로 동작해 API 요청을 검증·변경합니다. 정책 언어는 Rego이고 `opa test`로 로컬에서 테스트할 수 있으며, microservice·Terraform·CI 등 Kubernetes 외부에서도 널리 쓰입니다."
    },
    "ref": "https://www.openpolicyagent.org/docs/latest/kubernetes-introduction/"
  },
  {
    "id": "local-040",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "GitOps / IaC",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "In a cloud native world, what does the IaC abbreviation stands for?",
      "ko": "cloud native 환경에서 IaC는 무엇의 약자입니까?"
    },
    "choices": {
      "en": [
        "Infrastructure and Code",
        "Infrastructure as Code",
        "Infrastructure above Code",
        "Infrastructure across Code"
      ],
      "ko": [
        "Infrastructure and Code",
        "Infrastructure as Code",
        "Infrastructure above Code",
        "Infrastructure across Code"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Infrastructure as Code means describing infrastructure declaratively in version-controlled files (Terraform, Pulumi, Kubernetes manifests) and applying them automatically, which is the foundation of GitOps.",
      "ko": "Infrastructure as Code는 인프라를 버전 관리되는 파일(Terraform, Pulumi, Kubernetes manifest 등)로 선언적으로 기술하고 자동으로 적용하는 방식으로, GitOps의 기반이 됩니다."
    },
    "ref": "https://glossary.cncf.io/infrastructure-as-code/"
  },
  {
    "id": "local-041",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Serverless",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "In which framework do the developers no longer have to deal with capacity, deployments, scaling and fault tolerance, and OS?",
      "ko": "개발자가 용량, 배포, 스케일링, 장애 허용(fault tolerance), OS를 더 이상 신경 쓰지 않아도 되는 프레임워크는?"
    },
    "choices": {
      "en": [
        "Docker Swam",
        "Kubernetes",
        "Mesos",
        "Serverless"
      ],
      "ko": [
        "Docker Swarm",
        "Kubernetes",
        "Mesos",
        "Serverless"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "In the serverless model (FaaS such as AWS Lambda, or Knative on Kubernetes) the platform provisions capacity, scales to zero/up on demand, handles failures and OS patching; developers only supply code. Kubernetes, Swarm and Mesos still expose nodes, scaling and deployment to the operator.",
      "ko": "Serverless 모델(AWS Lambda 같은 FaaS, Kubernetes 위의 Knative 등)에서는 플랫폼이 용량 확보, 0까지 포함한 자동 스케일링, 장애 처리, OS 패치를 담당하고 개발자는 코드만 제공합니다. Kubernetes·Swarm·Mesos는 여전히 노드·스케일링·배포를 운영자가 다뤄야 합니다."
    },
    "ref": "https://glossary.cncf.io/serverless/"
  },
  {
    "id": "local-042",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Workloads / StatefulSet",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which of the following workload require a headless service while deploying into the namespace?",
      "ko": "다음 중 namespace에 배포할 때 headless Service가 필요한 워크로드는?"
    },
    "choices": {
      "en": [
        "StatefulSet",
        "CronJob",
        "Deployment",
        "DaemonSet"
      ],
      "ko": [
        "StatefulSet",
        "CronJob",
        "Deployment",
        "DaemonSet"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A StatefulSet's `serviceName` must reference a headless Service (clusterIP: None) so each Pod gets a stable DNS name like `web-0.nginx.default.svc.cluster.local`. Deployments and DaemonSets use ordinary Services optionally; CronJobs usually need none.",
      "ko": "StatefulSet은 `serviceName`에 headless Service(clusterIP: None)를 지정해야 하며, 이를 통해 각 Pod가 `web-0.nginx.default.svc.cluster.local` 같은 고정 DNS 이름을 갖습니다. Deployment·DaemonSet은 일반 Service를 선택적으로 쓰고 CronJob은 보통 Service가 필요 없습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/#stable-network-id"
  },
  {
    "id": "local-043",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "Helm",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is Helm?",
      "ko": "Helm은 무엇입니까?"
    },
    "choices": {
      "en": [
        "An open source dashboard for Kubernetes.",
        "A package manager for Kubernetes applications.",
        "A custom scheduler for Kubernetes.",
        "An end to end testing project for Kubernetes applications."
      ],
      "ko": [
        "Kubernetes용 오픈소스 대시보드",
        "Kubernetes 애플리케이션용 패키지 매니저",
        "Kubernetes용 커스텀 스케줄러",
        "Kubernetes 애플리케이션용 end-to-end 테스트 프로젝트"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Helm (CNCF graduated) packages Kubernetes manifests into versioned charts with templated values, and installs/upgrades/rolls back them as releases. The dashboard is a separate project; Helm does not schedule or test workloads.",
      "ko": "Helm(CNCF graduated)은 Kubernetes manifest를 템플릿화된 values와 함께 버전 관리되는 chart로 패키징하고, release 단위로 install/upgrade/rollback합니다. 대시보드는 별도 프로젝트이며 Helm은 스케줄링이나 테스트를 하지 않습니다."
    },
    "ref": "https://helm.sh/docs/"
  },
  {
    "id": "local-044",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Observability: Logs",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which is the correct kubectl command to display logs in real time?",
      "ko": "로그를 실시간으로 표시하는 올바른 kubectl 명령은?"
    },
    "choices": {
      "en": [
        "kubectl logs -p test-container-1",
        "kubectl logs -c test-container-1",
        "kubectl logs -l test-container-1",
        "kubectl logs -f test-container-1"
      ],
      "ko": [
        "kubectl logs -p test-container-1",
        "kubectl logs -c test-container-1",
        "kubectl logs -l test-container-1",
        "kubectl logs -f test-container-1"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "`-f/--follow` streams logs as they are written. `-p/--previous` shows the previous (crashed) container's logs, `-c` selects a container inside a multi-container Pod, `-l` selects Pods by label selector.",
      "ko": "`-f/--follow`는 기록되는 로그를 실시간으로 스트리밍합니다. `-p/--previous`는 이전(crash한) 컨테이너의 로그, `-c`는 multi-container Pod에서 컨테이너 지정, `-l`은 label selector로 Pod 선택입니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_logs/"
  },
  {
    "id": "local-045",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Init Containers",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "How to load and generate data required before the Pod startup?",
      "ko": "Pod가 시작되기 전에 필요한 데이터를 로드·생성하려면 어떻게 해야 합니까?"
    },
    "choices": {
      "en": [
        "Use an init container with shared file storage.",
        "Use a PVC volume.",
        "Use a sidecar container with shared volume.",
        "Use another pod with a PVC."
      ],
      "ko": [
        "공유 파일 스토리지와 함께 init container를 사용한다.",
        "PVC volume을 사용한다.",
        "공유 volume과 함께 sidecar container를 사용한다.",
        "PVC를 가진 다른 Pod를 사용한다."
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Init containers run to completion, in order, before the app containers start, so they are the place for setup work (download config, run migrations, generate files). Writing to a shared volume (e.g. emptyDir) hands the result to the main container. A sidecar runs concurrently with the app container, not before it; a PVC alone does not generate data.",
      "ko": "Init container는 앱 컨테이너가 시작되기 전에 순서대로 끝까지 실행되므로 설정 다운로드·마이그레이션·파일 생성 같은 준비 작업에 적합하며, 공유 volume(emptyDir 등)에 결과를 써서 메인 컨테이너에 넘깁니다. Sidecar는 앱 컨테이너와 동시에 실행되지 '이전'에 실행되지 않고, PVC 자체는 데이터를 생성하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/pods/init-containers/"
  },
  {
    "id": "local-046",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "GitOps",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What is the core functionality of GitOps tools like Argo CD and Flux?",
      "ko": "Argo CD, Flux 같은 GitOps 도구의 핵심 기능은 무엇입니까?"
    },
    "choices": {
      "en": [
        "They track production changes made by a human in a Git repository and generate a human-readable audit trail.",
        "They replace human operations with an agent that tracks Git commands.",
        "They automatically create pull requests when dependencies are outdated.",
        "They continuously compare the desired state in Git with the actual production state and notify or act upon differences."
      ],
      "ko": [
        "사람이 프로덕션에 가한 변경을 Git 저장소에 기록하고 사람이 읽을 수 있는 감사 로그를 생성한다.",
        "Git 명령을 추적하는 agent로 사람의 운영 작업을 대체한다.",
        "의존성이 오래되면 자동으로 pull request를 만든다.",
        "Git의 desired state와 실제 프로덕션 상태를 지속적으로 비교하여 차이를 알리거나 조정한다."
      ]
    },
    "answer": 3,
    "explain": {
      "en": "GitOps = Git is the single source of truth for desired state; a controller (Argo CD, Flux) continuously reconciles the live cluster toward it and reports/corrects drift. Changes flow from Git to the cluster, not the reverse (A). Dependency PRs are Dependabot/Renovate territory.",
      "ko": "GitOps는 Git을 desired state의 single source of truth로 두고, 컨트롤러(Argo CD, Flux)가 클러스터 실제 상태를 지속적으로 Git과 비교해 drift를 알리거나 자동 조정(reconcile)합니다. 변경은 Git→클러스터 방향이지 그 반대(A)가 아니며, 의존성 PR 생성은 Dependabot/Renovate의 역할입니다."
    },
    "ref": "https://opengitops.dev/"
  },
  {
    "id": "local-047",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Workloads / DaemonSet",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes resource workload ensures that all (or some) nodes run a copy of a Pod?",
      "ko": "모든(또는 일부) 노드에서 Pod 복사본이 하나씩 실행되도록 보장하는 Kubernetes 워크로드 리소스는?"
    },
    "choices": {
      "en": [
        "ReplicaSet",
        "StatefulSet",
        "DaemonSet",
        "Deployment"
      ],
      "ko": [
        "ReplicaSet",
        "StatefulSet",
        "DaemonSet",
        "Deployment"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "A DaemonSet schedules exactly one Pod per (selected) node and adds Pods as nodes join; typical for log agents, node monitoring, CNI/CSI plugins. ReplicaSet/Deployment maintain a replica count regardless of node placement; StatefulSet gives stable identities.",
      "ko": "DaemonSet은 (선택된) 노드마다 Pod를 정확히 하나씩 배치하고 노드가 추가되면 Pod도 추가합니다. 로그 agent, 노드 모니터링, CNI/CSI 플러그인에 전형적으로 사용됩니다. ReplicaSet/Deployment는 노드 배치와 무관하게 replica 수를 유지하고, StatefulSet은 고정 identity를 제공합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/controllers/daemonset/"
  },
  {
    "id": "local-048",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "API Extension / CRD",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "We can extend the Kubernetes API with Kubernetes API Aggregation Layer and CRDs. What is CRD?",
      "ko": "Kubernetes API는 API Aggregation Layer와 CRD로 확장할 수 있습니다. CRD는 무엇의 약자입니까?"
    },
    "choices": {
      "en": [
        "Custom Resource Definition",
        "Custom Restricted Definition",
        "Customized RUST Definition",
        "Custom RUST Definition"
      ],
      "ko": [
        "Custom Resource Definition",
        "Custom Restricted Definition",
        "Customized RUST Definition",
        "Custom RUST Definition"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A CustomResourceDefinition registers a new resource kind in the API server without writing an API server; combined with a controller it forms the Operator pattern. The aggregation layer instead plugs in a separate extension API server (e.g. metrics-server).",
      "ko": "CustomResourceDefinition은 별도 API server 없이 API server에 새로운 resource kind를 등록합니다. 컨트롤러와 결합하면 Operator 패턴이 됩니다. Aggregation layer는 별도의 extension API server(예: metrics-server)를 연결하는 방식입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"
  },
  {
    "id": "local-049",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Community and Governance",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "The Kubernetes project work is carried primarily by SIGs. What does SIG stand for?",
      "ko": "Kubernetes 프로젝트 작업은 주로 SIG에서 이루어집니다. SIG는 무엇의 약자입니까?"
    },
    "choices": {
      "en": [
        "Special Interest Group",
        "Software Installation Guide",
        "Support and Information Group",
        "Strategy Implementation Group"
      ],
      "ko": [
        "Special Interest Group",
        "Software Installation Guide",
        "Support and Information Group",
        "Strategy Implementation Group"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Kubernetes is organized into Special Interest Groups (sig-network, sig-node, sig-auth, …) that own code and design areas; smaller cross-cutting efforts are Working Groups and User Groups, all governed by the Steering Committee.",
      "ko": "Kubernetes는 코드·설계 영역을 소유하는 Special Interest Group(sig-network, sig-node, sig-auth 등)으로 조직되어 있습니다. 횡단적·한시적 작업은 Working Group, 사용자 모임은 User Group이며 전체는 Steering Committee가 관장합니다."
    },
    "ref": "https://github.com/kubernetes/community/blob/master/governance.md"
  },
  {
    "id": "local-050",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Security / 4C",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is the order of 4C's in Cloud Native Security, starting with the layer that a user has the most control over?",
      "ko": "Cloud Native Security의 4C를 사용자가 가장 많이 제어할 수 있는 계층부터 나열한 순서는?"
    },
    "choices": {
      "en": [
        "Cloud -> Container -> Cluster -> Code",
        "Container -> Cluster -> Code -> Cloud",
        "Cluster -> Container -> Code -> Cloud",
        "Code -> Container -> Cluster -> Cloud"
      ],
      "ko": [
        "Cloud -> Container -> Cluster -> Code",
        "Container -> Cluster -> Code -> Cloud",
        "Cluster -> Container -> Code -> Cloud",
        "Code -> Container -> Cluster -> Cloud"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "The 4Cs are nested layers: Code (innermost, fully yours) → Container → Cluster → Cloud/datacenter (outermost, trusted base). Each layer relies on the security of the layer outside it, so you have the most direct control over Code and the least over Cloud.",
      "ko": "4C는 중첩된 계층입니다: Code(가장 안쪽, 전적으로 사용자 통제) → Container → Cluster → Cloud/datacenter(가장 바깥, 신뢰 기반). 각 계층은 바깥 계층의 보안에 의존하므로 Code를 가장 직접 제어하고 Cloud는 가장 적게 제어합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/overview/"
  },
  {
    "id": "local-051",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Container Runtimes / Sandboxing",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which group of container runtimes provides additional sandboxed isolation and elevated security?",
      "ko": "다음 중 추가적인 sandbox 격리와 강화된 보안을 제공하는 container runtime 그룹은?"
    },
    "choices": {
      "en": [
        "rune, cgroups",
        "docker, containerd",
        "runsc, kata",
        "crun, cri-o"
      ],
      "ko": [
        "rune, cgroups",
        "docker, containerd",
        "runsc, kata",
        "crun, cri-o"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "runsc is gVisor's runtime (user-space kernel intercepting syscalls) and Kata Containers run each Pod in a lightweight VM; both are selected via a RuntimeClass. runc/crun are standard OCI runtimes sharing the host kernel, containerd/CRI-O/docker are higher-level runtimes, cgroups is a kernel feature.",
      "ko": "runsc는 gVisor의 runtime(user-space 커널이 syscall을 가로챔), Kata Containers는 Pod마다 경량 VM을 띄우며 둘 다 RuntimeClass로 선택합니다. runc/crun은 호스트 커널을 공유하는 표준 OCI runtime, containerd/CRI-O/docker는 상위 수준 runtime, cgroups는 커널 기능입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/containers/runtime-class/"
  },
  {
    "id": "local-052",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Service Mesh",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is the common standard for Service Meshes?",
      "ko": "Service Mesh의 공통 표준은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Service Mesh Specification (SMS)",
        "Service Mesh Technology (SMT)",
        "Service Mesh Interface (SMI)",
        "Service Mesh Function (SMF)"
      ],
      "ko": [
        "Service Mesh Specification (SMS)",
        "Service Mesh Technology (SMT)",
        "Service Mesh Interface (SMI)",
        "Service Mesh Function (SMF)"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Service Mesh Interface (SMI) was the CNCF specification defining common APIs (traffic split, access control, metrics) across meshes like Linkerd, Istio and Consul. It has since been archived in favor of the Kubernetes Gateway API's GAMMA initiative, but SMI remains the expected exam answer.",
      "ko": "Service Mesh Interface(SMI)는 Linkerd, Istio, Consul 등 mesh 간 공통 API(traffic split, access control, metrics)를 정의한 CNCF 사양입니다. 현재는 archived 되고 Kubernetes Gateway API의 GAMMA 이니셔티브로 계승되었지만, 시험에서 기대하는 답은 여전히 SMI입니다."
    },
    "ref": "https://smi-spec.io/"
  },
  {
    "id": "local-053",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Networking / Ingress",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which statement about Ingress is correct?",
      "ko": "Ingress에 관한 설명으로 올바른 것은?"
    },
    "choices": {
      "en": [
        "Ingress provides a simple way to track network endpoints within a cluster.",
        "Ingress is a Service type like NodePort and ClusterIP.",
        "Ingress is a construct that allows you to specify how a Pod is allowed to communicate.",
        "Ingress exposes routes from outside the cluster to services in the cluster."
      ],
      "ko": [
        "Ingress는 클러스터 내 네트워크 endpoint를 추적하는 간단한 방법을 제공한다.",
        "Ingress는 NodePort, ClusterIP와 같은 Service type이다.",
        "Ingress는 Pod가 어떻게 통신할 수 있는지를 지정하는 구성 요소다.",
        "Ingress는 클러스터 외부에서 클러스터 내 Service로의 경로를 노출한다."
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Ingress is an L7 (HTTP/HTTPS) routing object that maps external hosts/paths to Services, implemented by an Ingress controller (NGINX, Traefik…). It is not a Service type (B); endpoint tracking is EndpointSlice (A); Pod communication rules are NetworkPolicy (C).",
      "ko": "Ingress는 외부 host/path를 Service로 매핑하는 L7(HTTP/HTTPS) 라우팅 오브젝트이며 Ingress controller(NGINX, Traefik 등)가 구현합니다. Service type이 아니고(B), endpoint 추적은 EndpointSlice(A), Pod 통신 규칙은 NetworkPolicy(C)입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/ingress/"
  },
  {
    "id": "local-054",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Networking / Service Discovery",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What best describes cloud native service discovery?",
      "ko": "cloud native service discovery를 가장 잘 설명한 것은?"
    },
    "choices": {
      "en": [
        "It's a mechanism for applications and microservices to locate each other on a network.",
        "It's a procedure for discovering a MAC address, associated with a given IP address.",
        "It's used for automatically assigning IP addresses to devices connected to the network.",
        "It's a protocol that turns human-readable domain names into IP addresses on the Internet."
      ],
      "ko": [
        "애플리케이션과 microservice가 네트워크상에서 서로를 찾는 메커니즘이다.",
        "주어진 IP 주소에 대응하는 MAC 주소를 알아내는 절차다.",
        "네트워크에 연결된 장치에 IP 주소를 자동 할당하는 데 사용된다.",
        "사람이 읽을 수 있는 도메인 이름을 인터넷상의 IP 주소로 바꾸는 프로토콜이다."
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Service discovery lets dynamic workloads find each other without hard-coded addresses; in Kubernetes it is provided by Services plus cluster DNS (CoreDNS) and environment variables. B describes ARP, C DHCP, D public DNS.",
      "ko": "Service discovery는 동적으로 바뀌는 워크로드가 주소를 하드코딩하지 않고 서로를 찾게 해 줍니다. Kubernetes에서는 Service와 cluster DNS(CoreDNS), 환경 변수가 이를 제공합니다. B는 ARP, C는 DHCP, D는 일반 인터넷 DNS 설명입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/service/#discovering-services"
  },
  {
    "id": "local-055",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Container Runtimes / OCI",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What native runtime is Open Container Initiative (OCI) compliant?",
      "ko": "다음 중 Open Container Initiative(OCI) 호환 native runtime은 무엇입니까?"
    },
    "choices": {
      "en": [
        "runC",
        "runV",
        "kata-containers",
        "gvisor"
      ],
      "ko": [
        "runC",
        "runV",
        "kata-containers",
        "gvisor"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "runc is the reference implementation of the OCI runtime-spec, donated by Docker; containerd and CRI-O invoke it to create containers natively on the host kernel. Kata (VM-based) and gVisor/runsc (user-space kernel) are sandboxed runtimes, runV is a deprecated hypervisor runtime that merged into Kata.",
      "ko": "runc는 Docker가 기증한 OCI runtime-spec의 reference 구현으로, containerd와 CRI-O가 호스트 커널 위에 컨테이너를 만들 때 호출합니다. Kata(VM 기반)와 gVisor/runsc(user-space 커널)는 sandbox runtime이고, runV는 Kata로 합쳐진 옛 hypervisor runtime입니다."
    },
    "ref": "https://github.com/opencontainers/runc"
  },
  {
    "id": "local-056",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Workloads / Deployment",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which API object is the recommended way to run a scalable, stateless application on your cluster?",
      "ko": "클러스터에서 확장 가능한 stateless 애플리케이션을 실행할 때 권장되는 API 오브젝트는?"
    },
    "choices": {
      "en": [
        "ReplicaSet",
        "Deployment",
        "DaemonSet",
        "Pod"
      ],
      "ko": [
        "ReplicaSet",
        "Deployment",
        "DaemonSet",
        "Pod"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Deployment manages ReplicaSets and adds declarative rolling updates and rollbacks, which is why the docs recommend it over using ReplicaSets or bare Pods directly. DaemonSet is one-Pod-per-node, StatefulSet is for stateful apps.",
      "ko": "Deployment는 ReplicaSet을 관리하면서 선언적 rolling update와 rollback을 제공하므로, 공식 문서는 ReplicaSet이나 Pod를 직접 쓰는 대신 Deployment를 권장합니다. DaemonSet은 노드당 1 Pod, StatefulSet은 stateful 앱용입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"
  },
  {
    "id": "local-057",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Architecture / kubelet",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is the purpose of the kubelet component within a Kubernetes cluster?",
      "ko": "Kubernetes 클러스터에서 kubelet 컴포넌트의 역할은 무엇입니까?"
    },
    "choices": {
      "en": [
        "A dashboard for Kubernetes Clusters that allows management and troubleshooting of applications.",
        "A network proxy that runs on each node in your cluster, implementing part of the Kubernetes Service concept.",
        "A component that watches for newly created Pods with no assigned node, and selects a node for them to run on.",
        "An agent that runs on each node in the cluster. It makes sure that containers are running in a Pod."
      ],
      "ko": [
        "애플리케이션 관리·트러블슈팅을 위한 Kubernetes 클러스터 대시보드.",
        "각 노드에서 실행되며 Kubernetes Service 개념의 일부를 구현하는 네트워크 proxy.",
        "노드가 배정되지 않은 새 Pod를 감지하여 실행할 노드를 선택하는 컴포넌트.",
        "각 노드에서 실행되는 agent로, Pod 안의 컨테이너가 실행 중인지 보장한다."
      ]
    },
    "answer": 3,
    "explain": {
      "en": "kubelet is the node agent: it watches PodSpecs assigned to its node, drives the container runtime via CRI, runs probes and reports status. B is kube-proxy, C is kube-scheduler, A is the Dashboard add-on.",
      "ko": "kubelet은 노드 agent입니다. 자기 노드에 배정된 PodSpec을 watch하고 CRI를 통해 container runtime을 구동하며 probe 실행과 상태 보고를 합니다. B는 kube-proxy, C는 kube-scheduler, A는 Dashboard add-on 설명입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/architecture/#kubelet"
  },
  {
    "id": "local-058",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Security / Authorization",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What is the default value for authorization-mode in Kubernetes API server?",
      "ko": "Kubernetes API server의 authorization-mode 기본값은 무엇입니까?"
    },
    "choices": {
      "en": [
        "--authorization-mode=RBAC",
        "--authorization-mode=AlwaysAllow",
        "--authorization-mode=AlwaysDeny",
        "--authorization-mode=ABAC"
      ],
      "ko": [
        "--authorization-mode=RBAC",
        "--authorization-mode=AlwaysAllow",
        "--authorization-mode=AlwaysDeny",
        "--authorization-mode=ABAC"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "If the flag is omitted, kube-apiserver defaults to AlwaysAllow, which authorizes every authenticated request. Installers such as kubeadm explicitly set `Node,RBAC`, so real clusters use RBAC, but the component default is AlwaysAllow.",
      "ko": "플래그를 생략하면 kube-apiserver는 AlwaysAllow를 사용하여 인증된 모든 요청을 허용합니다. kubeadm 같은 설치 도구는 명시적으로 `Node,RBAC`를 설정하므로 실제 클러스터는 RBAC를 쓰지만, 컴포넌트 자체 기본값은 AlwaysAllow입니다."
    },
    "ref": "https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/"
  },
  {
    "id": "local-059",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Autoscaling / Cost",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Let's assume that an organization needs to process large amounts of data in bursts, on a cloud-based Kubernetes cluster. For instance: each Monday morning, they need to run a batch of 1000 compute jobs of 1 hour each, and these jobs must be completed by Monday night. What's going to be the most cost-effective method?",
      "ko": "어떤 조직이 클라우드 기반 Kubernetes 클러스터에서 대량의 데이터를 burst 형태로 처리해야 합니다. 예를 들어 매주 월요일 아침 1시간짜리 compute job 1000개를 실행하고 월요일 밤까지 완료해야 합니다. 가장 비용 효율적인 방법은?"
    },
    "choices": {
      "en": [
        "Run a group of nodes with the exact required size to complete the batch on time, and use a combination of taints, tolerations, and nodeSelectors to reserve these nodes to the batch jobs.",
        "Leverage the Kubernetes Cluster Autoscaler to automatically start and stop nodes as they're needed.",
        "Commit to a specific level of spending to get discounted prices (with e.g. \"reserved instances\" or similar mechanisms).",
        "Use PriorityClasses so that the weekly batch job gets priority over other workloads running on the cluster, and can be completed on time."
      ],
      "ko": [
        "배치를 제때 끝낼 수 있는 정확한 크기의 노드 그룹을 운영하고 taint/toleration/nodeSelector로 그 노드들을 배치 작업 전용으로 예약한다.",
        "Kubernetes Cluster Autoscaler를 활용하여 필요할 때 노드를 자동으로 시작·중지한다.",
        "일정 지출을 약정하여 할인 가격(reserved instance 등)을 받는다.",
        "PriorityClass를 사용하여 주간 배치 작업이 다른 워크로드보다 우선권을 갖고 제때 완료되도록 한다."
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The load is bursty (one day a week), so paying only while the jobs run is cheapest: Cluster Autoscaler adds nodes when Pods are Pending and removes them when idle. Dedicated nodes (A) and reserved instances (C) pay for idle capacity the other six days; PriorityClasses (D) affect ordering, not cost.",
      "ko": "부하가 주 1회 burst이므로 job이 도는 동안만 비용을 내는 것이 가장 쌉니다. Cluster Autoscaler는 Pending Pod가 생기면 노드를 추가하고 유휴 시 제거합니다. 전용 노드(A)와 reserved instance(C)는 나머지 6일의 유휴 용량 비용을 내야 하고, PriorityClass(D)는 순서만 바꾸지 비용과 무관합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/cluster-administration/cluster-autoscaling/"
  },
  {
    "id": "local-060",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Networking / Service",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is a Kubernetes service with no cluster IP address called?",
      "ko": "cluster IP 주소가 없는 Kubernetes Service를 무엇이라 부릅니까?"
    },
    "choices": {
      "en": [
        "Headless Service",
        "Nodeless Service",
        "IPLess Service",
        "Specless Service"
      ],
      "ko": [
        "Headless Service",
        "Nodeless Service",
        "IPLess Service",
        "Specless Service"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Setting `spec.clusterIP: None` creates a headless Service: no virtual IP and no kube-proxy load balancing; DNS returns the individual Pod IPs (A records), which StatefulSets use for per-Pod stable names.",
      "ko": "`spec.clusterIP: None`으로 만들면 headless Service가 됩니다. 가상 IP와 kube-proxy 로드밸런싱이 없고 DNS가 개별 Pod IP(A record)를 돌려주며, StatefulSet이 Pod별 고정 이름에 사용합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/service/#headless-services"
  },
  {
    "id": "local-061",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "CI/CD",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "CI/CD stands for:",
      "ko": "CI/CD는 무엇의 약자입니까?"
    },
    "choices": {
      "en": [
        "Continuous Information / Continuous Development",
        "Continuous Integration / Continuous Development",
        "Cloud Integration / Cloud Development",
        "Continuous Integration / Continuous Deployment"
      ],
      "ko": [
        "Continuous Information / Continuous Development",
        "Continuous Integration / Continuous Development",
        "Cloud Integration / Cloud Development",
        "Continuous Integration / Continuous Deployment"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "CI = Continuous Integration (merge and test frequently); CD = Continuous Delivery (always releasable) or Continuous Deployment (every passing change goes to production automatically). 'Continuous Development' is not a standard term.",
      "ko": "CI는 Continuous Integration(자주 merge·테스트), CD는 Continuous Delivery(항상 배포 가능 상태) 또는 Continuous Deployment(통과한 변경을 자동으로 프로덕션 배포)입니다. 'Continuous Development'는 표준 용어가 아닙니다."
    },
    "ref": "https://glossary.cncf.io/continuous-delivery/"
  },
  {
    "id": "local-062",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Security / Secrets",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What default level of protection is applied to the data in Secrets in the Kubernetes API?",
      "ko": "Kubernetes API의 Secret 데이터에 기본적으로 적용되는 보호 수준은 무엇입니까?"
    },
    "choices": {
      "en": [
        "The values use AES Symmetric Encryption",
        "The values are stored in plain text",
        "The values are encoded with SHA256 hashes",
        "The values are base64 encoded"
      ],
      "ko": [
        "값이 AES 대칭 암호화된다.",
        "값이 평문으로 저장된다.",
        "값이 SHA256 해시로 인코딩된다.",
        "값이 base64로 인코딩된다."
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Secret `data` values are base64-encoded, which is encoding, not encryption — anyone with API read access or etcd access can decode them. Encryption at rest requires configuring an EncryptionConfiguration on kube-apiserver; RBAC restricts who can read Secrets.",
      "ko": "Secret의 `data` 값은 base64 인코딩일 뿐 암호화가 아니므로 API 읽기 권한이나 etcd 접근이 있으면 누구나 디코딩할 수 있습니다. 저장 시 암호화는 kube-apiserver에 EncryptionConfiguration을 설정해야 하고, 읽기 권한은 RBAC로 제한합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/configuration/secret/"
  },
  {
    "id": "local-063",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Pod Lifecycle",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "If a Pod was waiting for container images to download on the scheduled node, what state would it be in?",
      "ko": "스케줄된 노드에서 Pod가 컨테이너 이미지 다운로드를 기다리는 중이라면 Pod는 어떤 상태입니까?"
    },
    "choices": {
      "en": [
        "Failed",
        "Succeeded",
        "Unknown",
        "Pending"
      ],
      "ko": [
        "Failed",
        "Succeeded",
        "Unknown",
        "Pending"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "A Pod stays in phase Pending from acceptance by the API server until all its containers have started; this covers both waiting for a node (unscheduled) and, after scheduling, pulling images. Failed/Succeeded are terminal phases, Unknown means the node stopped reporting.",
      "ko": "Pod는 API server에 수락된 뒤 모든 컨테이너가 시작될 때까지 Pending phase에 머뭅니다. 노드 미배정 상태뿐 아니라 스케줄 후 이미지 pull 중인 시간도 포함됩니다. Failed/Succeeded는 종료 phase이고 Unknown은 노드가 상태를 보고하지 못할 때입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/#pod-phase"
  },
  {
    "id": "local-064",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "OWASP Kubernetes Top 10 / Workload configuration",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Review the following pod manifest and answer the question that follows.\n\nObserved manifest (transcribed from image1):\napiVersion: v1\nkind: Pod\nmetadata:\n  name: Test-container\nspec:\n  containers:\n    ...\n  securityContext:\n    runAsUser: 0\n\nWhich OWASP Top 10 for Kubernetes risks does the following pod manifest introduce?",
      "ko": "다음 Pod manifest를 검토하고 질문에 답하세요.\n\nimage1에서 확인한 manifest(전사):\napiVersion: v1\nkind: Pod\nmetadata:\n  name: Test-container\nspec:\n  containers:\n    ...\n  securityContext:\n    runAsUser: 0\n\n이 Pod manifest가 유발하는 OWASP Kubernetes Top 10 위험은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Insecure Design",
        "Outdated and Vulnerable Kubernetes Components",
        "Insecure Workload Configurations",
        "Broken Authentication Mechanisms"
      ],
      "ko": [
        "안전하지 않은 설계(Insecure Design)",
        "오래되었거나 취약한 Kubernetes 컴포넌트",
        "안전하지 않은 워크로드 구성(Insecure Workload Configurations)",
        "손상된 인증 메커니즘"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "The observed manifest sets runAsUser: 0, so the container runs as root. That is an insecure workload configuration (OWASP Kubernetes Top 10 K01); it is not evidence of an outdated component or a broken authentication mechanism.",
      "ko": "확인된 manifest는 runAsUser: 0을 설정하여 컨테이너를 root로 실행합니다. 이는 OWASP Kubernetes Top 10의 안전하지 않은 워크로드 구성(K01)에 해당하며, 오래된 컴포넌트나 손상된 인증 메커니즘을 보여 주는 설정은 아닙니다."
    },
    "ref": "https://kubernetes-top10.owasp.org/2025/en/src/K01-Insecure-Workload-Configurations.html"
  },
  {
    "id": "local-065",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Pod networking / host namespaces",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which of the following Pod configurations would allow an attacker to eavesdrop on all traffic on the node?",
      "ko": "공격자가 노드의 모든 트래픽을 도청할 수 있게 하는 Pod 구성은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Pod with hostPID set to true",
        "Pod with hostNetwork set to true",
        "Pod with hostPath volume defined",
        "Pod with hostIPC set to true"
      ],
      "ko": [
        "hostPID를 true로 설정한 Pod",
        "hostNetwork를 true로 설정한 Pod",
        "hostPath 볼륨을 정의한 Pod",
        "hostIPC를 true로 설정한 Pod"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "hostNetwork places the Pod in the node's network namespace, removing the normal Pod network boundary. With the required packet-capture capabilities and access to traffic visible on that node, an attacker can eavesdrop on traffic there; this does not mean hostNetwork magically decrypts every end-to-end encrypted flow or observes other nodes.",
      "ko": "hostNetwork를 사용하면 Pod가 노드의 네트워크 namespace를 사용하여 일반적인 Pod 네트워크 경계를 제거합니다. 필요한 packet-capture 권한과 해당 노드에서 보이는 트래픽에 접근할 수 있으면 공격자가 그 트래픽을 도청할 수 있습니다. 다만 hostNetwork만으로 종단간 암호화를 해제하거나 다른 노드의 트래픽까지 관찰하는 것은 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/#the-kubernetes-network-model"
  },
  {
    "id": "local-066",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Container access control",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which of the following represents a baseline security measure for containers?",
      "ko": "컨테이너의 기본 보안 조치를 나타내는 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Implementing access control to restrict container access",
        "Configuring persistent storage for containers.",
        "Configuring a static IP for each container",
        "Run containers as the root user."
      ],
      "ko": [
        "컨테이너 접근을 제한하는 접근 제어 구현",
        "컨테이너용 영구 스토리지 구성",
        "각 컨테이너에 고정 IP 구성",
        "컨테이너를 root 사용자로 실행"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Restricting who or what can access a container is a baseline security control. Persistent storage and fixed IPs are operational choices, while running as root violates least privilege and should be avoided where possible.",
      "ko": "컨테이너에 누가 또는 무엇이 접근할 수 있는지 제한하는 것은 기본 보안 통제입니다. 영구 스토리지와 고정 IP는 운영상의 선택이고, root로 실행하는 것은 최소 권한 원칙에 어긋나므로 가능한 한 피해야 합니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/"
  },
  {
    "id": "local-067",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Security culture / collaboration",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Why is it important for security teams to maintain good relationships with developers?",
      "ko": "보안팀이 개발자와 좋은 관계를 유지하는 것이 중요한 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "To shift security responsibilities entirely to the development team",
        "To ensure developers follow security best practices without question.",
        "To establish trust and open communication between security and development teams.",
        "To create a hierarchical relationship where security teams dictate all decisions."
      ],
      "ko": [
        "보안 책임을 전적으로 개발팀에 넘기기 위해",
        "개발자가 보안 모범 사례를 무조건 따르게 하기 위해",
        "보안팀과 개발팀 사이에 신뢰와 열린 소통을 만들기 위해",
        "보안팀이 모든 결정을 지시하는 위계 관계를 만들기 위해"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Security is a shared responsibility. Trust and open communication let security specialists and developers identify and fix risks early instead of treating security as a gate that dictates decisions or shifts accountability.",
      "ko": "보안은 공동 책임입니다. 신뢰와 열린 소통이 있으면 보안을 결정을 지시하는 문턱이나 책임 전가 수단으로 만들지 않고, 보안 전문가와 개발자가 위험을 일찍 찾고 수정할 수 있습니다."
    },
    "ref": "https://csrc.nist.gov/pubs/sp/800/218/final"
  },
  {
    "id": "local-068",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Multi-tenancy / data-plane isolation",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which of the following is a measure for data plane isolation in a Kubernetes multi-tenancy scenario?",
      "ko": "Kubernetes 멀티테넌시에서 data plane isolation을 위한 조치는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Assign a dedicated set of workers to run Pods from each tenant.",
        "Assign a dedicated namespace to Pods from each tenant.",
        "Enforce Roles and RoleBindings tied to specific namespaces only, forbid cluster-wide roles.",
        "Enforce Object Count Quotas via the ResourceQuota admission controller."
      ],
      "ko": [
        "각 tenant의 Pod를 실행할 전용 worker 집합을 할당",
        "각 tenant의 Pod에 전용 namespace를 할당",
        "특정 namespace에만 연결된 Role과 RoleBinding을 강제하고 cluster-wide role을 금지",
        "ResourceQuota admission controller를 통해 object count quota를 강제"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Dedicated worker nodes isolate the data plane where tenant Pods execute. Namespaces, namespace-scoped RBAC, and object-count quotas primarily isolate API/control-plane access or resource consumption; they do not by themselves provide worker-level data-plane separation.",
      "ko": "전용 worker node 집합은 tenant Pod가 실행되는 data plane을 분리합니다. namespace, namespace 범위 RBAC, object count quota는 주로 API/control plane 접근 또는 리소스 소비를 격리하며, 그 자체로 worker 수준의 data-plane 분리를 제공하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/multi-tenancy/#data-plane-isolation"
  },
  {
    "id": "local-069",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "STRIDE",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "In the STRIDE threat modelling framework, what does the letter D stand for?",
      "ko": "STRIDE 위협 모델링 프레임워크에서 D는 무엇을 의미합니까?"
    },
    "choices": {
      "en": [
        "Disclosure",
        "Deception",
        "Data Tampering",
        "Denial of Service"
      ],
      "ko": [
        "Disclosure(정보 공개)",
        "Deception(기만)",
        "Data Tampering(데이터 변조)",
        "Denial of Service(서비스 거부)"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "In STRIDE, D stands for Denial of Service: an attack that prevents legitimate users from accessing a service or resource. Tampering is T and information disclosure is I.",
      "ko": "STRIDE에서 D는 Denial of Service(서비스 거부)를 뜻하며, 정당한 사용자가 서비스나 리소스에 접근하지 못하게 하는 공격입니다. 변조는 T(Tampering), 정보 공개는 I(Information Disclosure)입니다."
    },
    "ref": "https://learn.microsoft.com/en-us/azure/security/develop/threat-modeling-tool-threats"
  },
  {
    "id": "local-070",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Workload identity / least privilege",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Is it a best practice to let an application Pod use the underlying node's identity and credentials to authenticate to a datastore?",
      "ko": "애플리케이션 Pod가 datastore 인증에 underlying node의 identity와 credentials를 사용하는 것이 모범 사례입니까?"
    },
    "choices": {
      "en": [
        "Yes, it reduces the blast radius of a compromised pod by leveraging the node’s security measures.",
        "Yes, it improves the cluster's security by simplifying the application Pod's credential handling and authentication process.",
        "Yes, this is the Kubernetes default and thus has no impact on the security of the cluster.",
        "No, it increases the blast radius of a compromised pod. as a Pod can utilised the node permissions."
      ],
      "ko": [
        "예, 침해된 Pod의 blast radius를 줄이고 node의 보안 조치를 활용하므로",
        "예, 애플리케이션 Pod의 credential 처리를 단순화하여 cluster 보안을 높이므로",
        "예, Kubernetes 기본 동작이므로 cluster 보안에 영향이 없으므로",
        "아니요, 침해된 Pod가 node 권한을 사용할 수 있어 blast radius가 커지므로"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "No. A compromised workload using the node identity can inherit permissions that belong to the node and affect other workloads or cluster resources. Give a Pod a dedicated, least-privileged workload identity instead of sharing node credentials.",
      "ko": "아닙니다. 침해된 workload가 node identity를 사용하면 node에 부여된 권한을 물려받아 다른 workload나 cluster 리소스에 영향을 줄 수 있습니다. node credential을 공유하지 말고 Pod에 필요한 최소 권한의 전용 workload identity를 부여해야 합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/service-accounts/"
  },
  {
    "id": "local-071",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Kubernetes audit policy",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "A user needs to maintain the audit policy of a Kubernetes cluster and wants to make sure that they log the most information in regard to Pod changes. Which level do they select for the Pod resource?",
      "ko": "Pod 변경에 관한 정보를 가장 많이 기록하려면 audit policy에서 Pod resource에 어떤 level을 선택해야 합니까?"
    },
    "choices": {
      "en": [
        "Request",
        "RequestResponse",
        "RequestResponseMetadata",
        "Metadata"
      ],
      "ko": [
        "Request",
        "RequestResponse",
        "RequestResponseMetadata",
        "Metadata"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "RequestResponse records request metadata, the request body, and the response body. It is the most detailed valid Kubernetes audit level listed; Request omits the response body, Metadata omits both bodies, and RequestResponseMetadata is not a Kubernetes audit level.",
      "ko": "RequestResponse는 request metadata, request body, response body를 기록합니다. 제시된 보기 중 Kubernetes에서 유효한 가장 상세한 audit level입니다. Request는 response body를, Metadata는 두 body를 기록하지 않으며 RequestResponseMetadata는 Kubernetes audit level이 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/"
  },
  {
    "id": "local-072",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Namespace hardening",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which of the following is a recommendation in the NSA and CISA Kubernetes Hardening Guidance on namespaces?",
      "ko": "NSA와 CISA의 Kubernetes Hardening Guidance에서 namespace에 관해 권고하는 내용은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Assign a single and unique namespace to each tenant.",
        "Use the default namespace for all workloads.",
        "User Pods should not be placed in kube-system or kube-public.",
        "Share the same namespace for all workloads to improve resource utilization."
      ],
      "ko": [
        "각 tenant에 하나의 고유 namespace를 할당",
        "모든 workload에 default namespace 사용",
        "사용자 Pod를 kube-system 또는 kube-public에 배치하지 않기",
        "리소스 활용도를 높이기 위해 모든 workload가 같은 namespace 공유"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "The NSA/CISA Kubernetes Hardening Guidance recommends keeping user workloads out of the namespaces reserved for Kubernetes system components and public cluster information. Therefore user Pods should not be placed in kube-system or kube-public.",
      "ko": "NSA/CISA Kubernetes Hardening Guidance는 Kubernetes system component와 공개 cluster 정보에 사용하는 namespace에 사용자 workload를 두지 않도록 권고합니다. 따라서 사용자 Pod는 kube-system 또는 kube-public에 배치하지 않아야 합니다."
    },
    "ref": "https://www.cisa.gov/news-events/alerts/2022/03/15/updated-kubernetes-hardening-guide"
  },
  {
    "id": "local-073",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Container privilege controls · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "A container is intended to run as an unprivileged Linux process, but its image invokes a set-user-ID binary. Which field in spec.containers[].securityContext should be set to prevent the process from gaining extra privileges?",
      "ko": "컨테이너가 권한 없는 Linux 프로세스로 실행되도록 했지만 이미지가 set-user-ID 바이너리를 호출합니다. 프로세스가 추가 권한을 얻지 못하게 하려면 spec.containers[].securityContext의 어떤 필드를 설정해야 합니까?"
    },
    "choices": {
      "en": [
        "allowPrivilegeEscalation: false",
        "privileged: true",
        "hostNetwork: true",
        "runAsUser: 0"
      ],
      "ko": [
        "allowPrivilegeEscalation: false",
        "privileged: true",
        "hostNetwork: true",
        "runAsUser: 0"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Set spec.containers[].securityContext.allowPrivilegeEscalation to false. Kubernetes uses this setting to enable no_new_privs, preventing a process from gaining more privileges than its parent, including through a set-user-ID binary. The scenario is unprivileged and does not combine the setting with privileged mode or CAP_SYS_ADMIN.",
      "ko": "spec.containers[].securityContext.allowPrivilegeEscalation을 false로 설정합니다. Kubernetes는 이 설정으로 no_new_privs를 활성화하여 set-user-ID 바이너리를 통한 경우를 포함해 프로세스가 부모보다 더 많은 권한을 얻지 못하게 합니다. 이 시나리오는 권한 없는 컨테이너이며 privileged 모드나 CAP_SYS_ADMIN을 함께 사용하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/"
  },
  {
    "id": "local-074",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Pod Security Admission · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "The team-a namespace currently has pod-security.kubernetes.io/warn: baseline, so a privileged Pod is accepted with a warning. Which minimal label change makes the same Baseline policy reject that Pod?",
      "ko": "team-a namespace에 현재 pod-security.kubernetes.io/warn: baseline이 설정되어 있어 privileged Pod가 경고와 함께 허용됩니다. 같은 Baseline 정책이 해당 Pod를 거부하도록 만드는 최소 label 변경은 무엇입니까?"
    },
    "choices": {
      "en": [
        "pod-security.kubernetes.io/enforce: baseline",
        "pod-security.kubernetes.io/audit: baseline",
        "pod-security.kubernetes.io/warn: baseline",
        "pod-security.kubernetes.io/enforce: privileged"
      ],
      "ko": [
        "pod-security.kubernetes.io/enforce: baseline",
        "pod-security.kubernetes.io/audit: baseline",
        "pod-security.kubernetes.io/warn: baseline",
        "pod-security.kubernetes.io/enforce: privileged"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The enforce label selects the Pod Security Standard level that rejects non-conforming Pods; enforce: baseline therefore blocks workloads that violate Baseline restrictions, including privileged Pods. Audit records violations and warn reports them to the submitting user without enforcing rejection, while privileged is the least restrictive level.",
      "ko": "enforce label은 부합하지 않는 Pod를 거부할 Pod Security Standard 수준을 선택하므로 enforce: baseline은 privileged Pod를 포함해 Baseline 제한을 위반하는 workload를 차단합니다. audit은 위반을 기록하고 warn은 제출 사용자에게 경고만 하며, privileged는 가장 제한이 적은 수준입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/pod-security-admission/"
  },
  {
    "id": "local-075",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Service mesh architecture · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which pair best describes the two primary planes commonly discussed in a service-mesh architecture?",
      "ko": "서비스 mesh 아키텍처에서 일반적으로 말하는 두 가지 주요 plane을 가장 잘 설명하는 조합은 무엇입니까?"
    },
    "choices": {
      "en": [
        "A control plane that configures policy and a data plane of proxies that handles service traffic",
        "A storage plane that persists logs and a runtime plane that schedules Pods",
        "A namespace plane that assigns IPs and a database plane that stores manifest",
        "A build plane that creates images and a registry plane that signs certificates"
      ],
      "ko": [
        "정책을 구성하는 제어 plane과 서비스 트래픽을 처리하는 proxy들의 data plane",
        "로그를 저장하는 스토리지 plane과 Pod를 스케줄링하는 런타임 plane",
        "IP를 할당하는 네임스페이스 plane과 매니페스트를 저장하는 데이터베이스 plane",
        "이미지를 만드는 빌드 plane과 인증서를 서명하는 registry plane"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A service mesh separates management from traffic handling: the control plane distributes configuration and policy, while data-plane proxies mediate service-to-service traffic. Storage, scheduling, and image building are separate platform concerns.",
      "ko": "서비스 mesh는 관리와 트래픽 처리를 분리합니다. 제어 plane은 구성과 정책을 배포하고 data-plane proxy는 서비스 간 트래픽을 중개합니다. 스토리지, 스케줄링, 이미지 빌드는 별도의 플랫폼 관심사입니다."
    },
    "ref": "https://istio.io/latest/docs/ops/deployment/architecture/"
  },
  {
    "id": "local-076",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Storage operators · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What is the main value of a Kubernetes storage operator such as Rook?",
      "ko": "Rook와 같은 Kubernetes 스토리지 운영자의 주요 가치는 무엇입니까?"
    },
    "choices": {
      "en": [
        "It automates lifecycle management of a storage system through Kubernetes resources",
        "It replaces the Kubernetes API server with a storage-specific scheduler",
        "It converts every PersistentVolume into an in-memory volume",
        "It provides a container image registry without managing storage"
      ],
      "ko": [
        "Kubernetes 리소스를 통해 스토리지 시스템의 lifecycle 관리를 자동화합니다",
        "Kubernetes API server를 스토리지 전용 scheduler로 교체합니다",
        "모든 PersistentVolume을 메모리 내 볼륨으로 변환합니다",
        "스토리지를 관리하지 않고 컨테이너 이미지 registry를 제공합니다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A storage operator uses Kubernetes APIs and reconciliation to deploy and operate a storage system, including routine lifecycle tasks. It does not replace core control-plane components or change every volume into memory storage.",
      "ko": "스토리지 운영자는 Kubernetes API와 reconciliation을 사용해 스토리지 시스템을 배포하고 운영하며 lifecycle 작업을 자동화합니다. 핵심 제어-plane 구성 요소를 교체하거나 모든 볼륨을 memory 스토리지로 바꾸지는 않습니다."
    },
    "ref": "https://rook.io/docs/rook/latest/Getting-Started/intro/"
  },
  {
    "id": "local-077",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Kubernetes objects · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which set contains the required top-level identity field for a Kubernetes object manifest?",
      "ko": "Kubernetes 객체 매니페스트에서 객체 식별에 필요한 최상위 필드 조합은 무엇입니까?"
    },
    "choices": {
      "en": [
        "apiVersion, kind, and metadata",
        "apiVersion, namespace, and data",
        "kind, namespace, and status",
        "metadata, data, and status"
      ],
      "ko": [
        "apiVersion, kind, metadata",
        "apiVersion, 네임스페이스, data",
        "kind, 네임스페이스, 상태",
        "metadata, data, 상태"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A manifest identifies the API version and object kind, and metadata supplies the object's identity and management information. field such as namespace, data, and status depend on the particular resource and are not universal top-level requirements.",
      "ko": "매니페스트는 API version과 객체 kind를 지정하고 metadata가 객체 식별 및 관리 정보를 제공합니다. 네임스페이스, data, 상태는 리소스 종류에 따라 달라지므로 모든 객체에 공통인 top-level 필드는 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/working-with-objects/"
  },
  {
    "id": "local-078",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Site reliability engineering · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which activity most direct helps an SRE establish a baseline for an application's reliability?",
      "ko": "SRE가 애플리케이션 신뢰성의 baseline을 설정하는 데 가장 직접적으로 도움이 되는 활동은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Defining normal service-level indicators from measurements and monitoring them",
        "Alerting only after an outage has already occurred",
        "Forecasting capacity without defining any service-level indicator",
        "Recording only successful requests and discarding failures"
      ],
      "ko": [
        "측정값에서 정상 서비스-level indicator를 정의하고 이를 모니터링하기",
        "outage가 이미 발생한 후에만 alert 보내기",
        "서비스-level indicator를 정의하지 않고 capacity만 forecast하기",
        "성공한 요청만 기록하고 장애는 버리기"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Monitoring meaningful indicators of normal behavior gives an SRE a reference against which incidents and regressions can be detected. UI design, feature inventory, and budgeting may matter elsewhere but do not establish an operational reliability baseline.",
      "ko": "정상 동작을 나타내는 지표를 모니터링하면 SRE가 인시던트와 regression을 감지할 기준을 얻습니다. UI 설계, 기능 목록, budget은 다른 목적에는 필요할 수 있지만 운영 신뢰성 baseline을 만들지는 않습니다."
    },
    "ref": "https://sre.google/sre-book/monitoring-distributed-systems/"
  },
  {
    "id": "local-080",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Distributed systems · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "At the application layer, which mechanism is designed to prevent split-brain leadership by requiring agreement among a quorum of members?",
      "ko": "애플리케이션 계층에서 quorum 구성원의 합의를 요구하여 split-brain 리더를 방지하도록 설계된 메커니즘은 무엇입니까?"
    },
    "choices": {
      "en": [
        "A consensus protocol",
        "A rolling update strategy",
        "A container image registry",
        "A namespace label"
      ],
      "ko": [
        "consensus protocol",
        "rolling update 전략",
        "컨테이너 이미지 registry",
        "네임스페이스 label"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Consensus protocols coordinate replicas so that a quorum agrees on a value or leader, which is the application-level mechanism for handling partition and split-brain risks. Kubernetes deployment strategies and namespace do not provide that agreement protocol.",
      "ko": "consensus protocol은 replica들이 조정되어 quorum이 값이나 리더에 합의하도록 하므로 partition과 split-brain 위험을 다루는 애플리케이션 수준 메커니즘입니다. Kubernetes deployment 전략와 네임스페이스는 이러한 합의 protocol을 제공하지 않습니다."
    },
    "ref": "https://etcd.io/docs/v3.5/learning/why/"
  },
  {
    "id": "local-081",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Network policies · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "A CNI plugin must enforce which Kubernetes resource to restrict traffic between selected Pods?",
      "ko": "선택한 Pod 사이의 트래픽을 제한하려면 CNI plugin이 어떤 Kubernetes 리소스를 enforce해야 합니까?"
    },
    "choices": {
      "en": [
        "NetworkPolicy",
        "PersistentVolumeClaim",
        "HorizontalPodAutoscaler",
        "PodDisruptionBudget"
      ],
      "ko": [
        "NetworkPolicy",
        "PersistentVolumeClaim",
        "HorizontalPodAutoscaler",
        "PodDisruptionBudget"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "NetworkPolicy expresses allowed ingress and egress traffic for selected Pods, but enforcement depends on a network plugin that supports NetworkPolicy. The other resources address storage, scaling, and disruption availability rather than packet-flow authorization.",
      "ko": "NetworkPolicy는 선택한 Pod의 허용 ingress와 egress 트래픽을 표현하지만, 실제 enforcement는 NetworkPolicy를 지원하는 네트워크 plugin에 달려 있습니다. 다른 리소스는 각각 스토리지, scaling, disruption 가용성를 다룹니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/network-policies/"
  },
  {
    "id": "local-082",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Service DNS · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Why do Kubernetes workload normally use a Service DNS name instead of a Pod IP for discovery?",
      "ko": "Kubernetes 워크로드가 discovery에 Pod IP 대신 Service DNS name을 일반적으로 사용하는 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "The Service name remains a stable discovery address while backend Pod IPs can change",
        "A Service DNS name automatically encrypts every application protocol",
        "A Service DNS name route traffic to virtual machines outside every cluster",
        "Pod IPs are never assigned until a Service is created"
      ],
      "ko": [
        "백엔드 Pod IP는 바뀔 수 있지만 Service name은 안정적인 discovery address로 유지됩니다",
        "Service DNS name이 모든 애플리케이션 protocol을 자동으로 암호화합니다",
        "Service DNS name이 모든 클러스터 외부 virtual machine으로 트래픽을 전달합니다",
        "Service가 생성되기 전에는 Pod IP가 절대 할당되지 않습니다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Kubernetes DNS publishes names for Services and Pods, and a Service provides a stable virtual endpoint while its selected Pods may be replaced or rescheduled. DNS itself provides naming and discovery; it does not automatically encrypt all application traffic.",
      "ko": "Kubernetes DNS는 Service와 Pod의 name을 제공하며, Service는 선택된 Pod가 교체되거나 재스케줄되어도 안정적인 virtual endpoint를 제공합니다. DNS는 naming과 discovery를 제공할 뿐 모든 애플리케이션 트래픽을 자동으로 암호화하지는 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/"
  },
  {
    "id": "local-083",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Labels and selectors · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "A controller must select every Pod carrying app=payments. Which Kubernetes mechanism expresses that matching rule?",
      "ko": "controller가 app=payments label을 가진 모든 Pod를 선택해야 합니다. 이 일치하는 규칙을 표현하는 Kubernetes 메커니즘은 무엇입니까?"
    },
    "choices": {
      "en": [
        "A label selector",
        "A CustomResourceDefinition",
        "A PodDisruptionBudget",
        "A namespace name"
      ],
      "ko": [
        "label selector",
        "CustomResourceDefinition",
        "PodDisruptionBudget",
        "네임스페이스 name"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A label selector evaluates label requirements and identifies the set of object that match them. Labels are attributes attached to object; the selector is the query or matching mechanism.",
      "ko": "label selector는 label requirement를 평가하여 조건에 맞는 객체 집합을 식별합니다. label은 객체에 붙는 attribute이고 selector는 이를 조회하거나 일치하는하는 메커니즘입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/"
  },
  {
    "id": "local-086",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Kubernetes API · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which control-plane component exposes the Kubernetes API used by clients to create and manage object?",
      "ko": "client가 객체를 생성하고 관리할 때 사용하는 Kubernetes API를 노출하는 제어-plane 구성 요소는 무엇입니까?"
    },
    "choices": {
      "en": [
        "kube-apiserver",
        "etcd",
        "kube-controller-manager",
        "kube-proxy"
      ],
      "ko": [
        "kube-apiserver",
        "etcd",
        "kube-controller-관리자",
        "kube-proxy"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "kube-apiserver provides the HTTP API endpoint for Kubernetes object and coordinates access through authentication, authorization, and admission. etcd stores status, while the other components perform different control or node features.",
      "ko": "kube-apiserver는 Kubernetes 객체용 HTTP API endpoint를 제공하고 authentication, authorization, admission을 통해 access를 조정합니다. etcd는 상태를 저장하고 나머지 구성 요소는 다른 제어 또는 노드 기능을 수행합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/components/"
  },
  {
    "id": "local-087",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Open source governance · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which artifact should an open-source project's governance board define to clarify how contributors and maintainers interact?",
      "ko": "open-소스 프로젝트의 거버넌스 위원회가 기여자와 maintainer의 상호작용을 명확히 하기 위해 정의해야 하는 산출물는 무엇입니까?"
    },
    "choices": {
      "en": [
        "The project's terms of engagement",
        "The project's release-versioning policy",
        "The project's open-source license",
        "The project's technical architecture roadmap"
      ],
      "ko": [
        "프로젝트의 terms of engagement",
        "프로젝트의 릴리스-versioning 정책",
        "프로젝트의 open-소스 license",
        "프로젝트의 technical architecture roadmap"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Terms of engagement document the project's participation rule, decision processes, and expectations for contributors and maintainers. They are governance rule, not runtime cluster settings.",
      "ko": "terms of engagement는 기여자와 maintainer의 참여 규칙, 의사결정 과정, 기대사항을 문서화합니다. 이는 런타임 클러스터 설정이 아니라 거버넌스 규칙입니다."
    },
    "ref": "https://contribute.cncf.io/projects/best-practices/governance/"
  },
  {
    "id": "local-089",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Service discovery · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which pair are Kubernetes' traditional built-in Service-discovery mechanisms available to Pods?",
      "ko": "Pod가 사용할 수 있는 Kubernetes의 전통적인 내장 Service-discovery 메커니즘 두 가지는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Cluster DNS records and Service environment variables",
        "LDAP records and RADIUS leases",
        "Pod labels and DHCP options",
        "API server logs and image tags"
      ],
      "ko": [
        "클러스터 DNS record와 Service 환경 variable",
        "LDAP record와 RADIUS lease",
        "Pod label과 DHCP option",
        "API server log와 이미지 tag"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Kubernetes provides cluster DNS records for Services and injects Service-related environment variables into Pods created after those Services exist. The environment-variable list is not retroactively updated for Services created later, so it is not an unconditional list of every Service.",
      "ko": "Kubernetes는 Service용 클러스터 DNS record를 제공하고, 해당 Service가 존재할 때 생성된 Pod에 Service 관련 환경 variable을 주입합니다. 나중에 생성된 Service는 기존 Pod의 환경-variable 목록에 소급 반영되지 않으므로 모든 Service가 무조건 포함되는 것은 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/service/#discovering-services"
  },
  {
    "id": "local-090",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Metrics and observability · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which Prometheus metric type is intended for one current measurement, such as the temperature of a device or the number of concurrent requests?",
      "ko": "장치의 온도나 동시 요청 수처럼 하나의 현재 측정값을 나타내도록 설계된 Prometheus 메트릭 유형은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Gauge",
        "Counter",
        "Histogram",
        "Summary"
      ],
      "ko": [
        "Gauge",
        "Counter",
        "Histogram",
        "Summary"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A Gauge represents one current numerical measurement that may rise or fall, such as temperature or concurrent requests. Counters represent cumulative totals, while Histograms and Summaries describe distributions of observations rather than one current measurement.",
      "ko": "Gauge는 온도나 동시 요청처럼 오르내릴 수 있는 하나의 현재 numerical measurement를 나타냅니다. Counter는 cumulative total을 나타내고 Histogram과 Summary는 하나의 현재값이 아니라 observation 분포를 설명합니다."
    },
    "ref": "https://prometheus.io/docs/concepts/metric_types/#gauge"
  },
  {
    "id": "local-091",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Container health probes · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes component performs the configured liveness, readiness, and startup probes for containers?",
      "ko": "컨테이너에 설정된 liveness, readiness, startup probe를 수행하는 Kubernetes 구성 요소는 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubelet",
        "kube-apiserver",
        "kube-scheduler",
        "kube-controller-manager"
      ],
      "ko": [
        "kubelet",
        "kube-apiserver",
        "kube-scheduler",
        "kube-controller-관리자"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The kubelet performs configured probes on containers. Readiness controls whether the Pod is included in matching Service endpoints, liveness can trigger a restart, and startup gives slow-starting containers time to initialize; direct Pod-IP clients are not automatically blocked by a readiness result.",
      "ko": "kubelet이 컨테이너에 설정된 probe를 수행합니다. readiness는 Pod가 일치하는 Service endpoint에 포함되는지 제어하고 liveness는 재시작을 유도할 수 있으며 startup은 느리게 시작하는 컨테이너의 초기화를 보호합니다. readiness 결과가 직접 Pod-IP client를 자동으로 차단하는 것은 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/configuration/liveness-readiness-startup-probes/"
  },
  {
    "id": "local-092",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Cloud controller manager · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes component coordinates cloud-provider integration for a Service that requests an external load balancer?",
      "ko": "external load balancer를 요청하는 Service에 대해 cloud-provider 통합을 조정하는 Kubernetes 구성 요소는 무엇입니까?"
    },
    "choices": {
      "en": [
        "cloud-controller-manager",
        "kube-scheduler",
        "kubelet",
        "etcd"
      ],
      "ko": [
        "cloud-controller-관리자",
        "kube-scheduler",
        "kubelet",
        "etcd"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The cloud-controller-manager runs cloud-specific controllers, including the Service controller that integrates Kubernetes Services with a cloud provider's load-balancer API. A Service remaining Pending alone is not proof of a controller failure; permission, quota, or provider configuration can also be causes.",
      "ko": "cloud-controller-관리자는 cloud 전용 controller를 실행하며, Service를 cloud provider의 load-balancer API와 통합하는 Service controller도 포함합니다. Service가 Pending인 사실만으로 controller 장애를 증명할 수는 없고 권한, quota, provider 설정도 원인일 수 있습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/architecture/cloud-controller/"
  },
  {
    "id": "local-093",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Cloud-native system properties · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which property describes making a running system's behavior understandable through metrics, logs, and traces?",
      "ko": "메트릭, log, trace를 통해 실행 중인 시스템의 동작을 이해할 수 있게 하는 property는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Observability",
        "Resiliency",
        "Agility",
        "Portability"
      ],
      "ko": [
        "Observability",
        "Resiliency",
        "Agility",
        "Portability"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Observability is the ability to infer a system’s internal status from its externally exposed telemetry, such as metrics, logs, and traces. Resilience concerns continuing or recovering under failure; agility concerns adapting and delivering change quickly.",
      "ko": "Observability는 메트릭, log, trace와 같은 외부 telemetry로 시스템의 내부 상태를 추론하는 능력입니다. Resiliency는 장애 중에도 지속하거나 복구하는 특성이고 agility는 변화에 빠르게 적응하고 전달하는 특성입니다."
    },
    "ref": "https://opentelemetry.io/docs/concepts/observability-primer/"
  },
  {
    "id": "local-094",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "CNCF terminology · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What does the acronym CNCF expand to?",
      "ko": "CNCF 약자는 무엇의 약자입니까?"
    },
    "choices": {
      "en": [
        "Cloud Native Computing Foundation",
        "Cloud Network Container Federation",
        "Cloud Neutral Compute Framework",
        "Container Networking Community Forum"
      ],
      "ko": [
        "Cloud Native Computing Foundation",
        "Cloud Network Container Federation",
        "Cloud Neutral Compute Framework",
        "Container Networking Community Forum"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "CNCF stands for Cloud Native Computing Foundation, a Linux Foundation organization that host and supports cloud-native open-source projects. The other expansions are not the organization's name.",
      "ko": "CNCF는 Cloud Native Computing Foundation의 약자이며 cloud-native open-소스 프로젝트를 호스팅하고 지원하는 Linux Foundation organization입니다. 나머지 expansion은 공식 명칭이 아닙니다."
    },
    "ref": "https://www.cncf.io/about/who-we-are/"
  },
  {
    "id": "local-095",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Namespaces and organization · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Why can teams use separate Kubernetes namespace within one physical cluster?",
      "ko": "하나의 physical 클러스터 안에서 팀이 서로 다른 Kubernetes 네임스페이스를 사용할 수 있는 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Namespaces scope namespaced resources and help divide resources among teams or projects",
        "Each namespace is a separate virtual machine with its own kernel",
        "Namespaces replace the Kubernetes API server for that team",
        "A namespace automatically encrypts every packet between its Pods"
      ],
      "ko": [
        "네임스페이스가 namespaced 리소스의 범위를 정하고 팀 또는 프로젝트 간 리소스를 나누는 데 도움을 주기 때문입니다",
        "각 네임스페이스가 자체 kernel을 가진 별도의 virtual machine이기 때문입니다",
        "네임스페이스가 해당 팀의 Kubernetes API server를 교체하기 때문입니다",
        "네임스페이스가 그 안의 Pod 사이 모든 packet을 자동으로 암호화하기 때문입니다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Namespaces provide a scope for namespaced object and a way to divide cluster resources among teams or projects. They are not virtual machines, do not replace the API server, and do not by themselves provide network encryption.",
      "ko": "네임스페이스는 namespaced 객체의 범위와 팀 또는 프로젝트 간 클러스터 리소스를 나누는 방법을 제공합니다. 네임스페이스 자체는 virtual machine이 아니며 API server를 교체하거나 네트워크 encryption을 제공하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"
  },
  {
    "id": "local-096",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Kubernetes API · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which interface do kubectl, controllers, and other clients use to create, read, update, and delete Kubernetes resources?",
      "ko": "kubectl, controller 및 다른 client가 Kubernetes resource를 생성·조회·업데이트·삭제할 때 사용하는 인터페이스는 무엇입니까?"
    },
    "choices": {
      "en": [
        "The Kubernetes API",
        "The container runtime socket",
        "The CNI configuration file",
        "The kubelet's local status endpoint"
      ],
      "ko": [
        "Kubernetes API",
        "컨테이너 런타임 socket",
        "CNI 구성 파일",
        "kubelet의 로컬 상태 endpoint"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The Kubernetes API is the central resource-based programmatic interface used by clients and cluster components. kubectl is one client of that API; runtime and CNI interfaces serve node-specific features.",
      "ko": "Kubernetes API는 client와 cluster component가 사용하는 central resource-based programmatic 인터페이스입니다. kubectl은 그 API의 client 중 하나이며 runtime과 CNI 인터페이스는 node별 기능을 담당합니다."
    },
    "ref": "https://kubernetes.io/docs/reference/using-api/api-concepts/"
  },
  {
    "id": "local-097",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Linux node services and container runtimes · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which component is a Linux system and service manager rather than a Kubernetes CRI container runtime?",
      "ko": "Kubernetes CRI 컨테이너 런타임이 아니라 Linux 시스템 및 서비스 관리자인 구성 요소는 무엇입니까?"
    },
    "choices": {
      "en": [
        "systemd",
        "containerd",
        "CRI-O",
        "cri-dockerd"
      ],
      "ko": [
        "systemd",
        "containerd",
        "CRI-O",
        "cri-dockerd"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "systemd runs as the Linux system and service manager (PID 1); it starts and supervises services. containerd and CRI-O are CRI-capable container runtimes, while cri-dockerd is an adapter for Docker Engine.",
      "ko": "systemd는 Linux 시스템 및 서비스 관리자(PID 1)로 실행되어 서비스를 시작하고 감독합니다. containerd와 CRI-O는 CRI를 지원하는 컨테이너 런타임이고 cri-dockerd는 Docker Engine용 adapter입니다."
    },
    "ref": "https://systemd.io/"
  },
  {
    "id": "local-098",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Cluster networking · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What capability does the Kubernetes network model require for Pods on different nodes?",
      "ko": "서로 다른 노드의 Pod에 대해 Kubernetes 네트워크 model이 요구하는 capability는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Pod-to-Pod communication without requiring application-specific proxies or address translation",
        "A shared host filesystem mounted into every Pod",
        "A separate REST API server for every node",
        "A cache that copies every container image between nodes"
      ],
      "ko": [
        "애플리케이션-특정 proxy나 address translation을 요구하지 않는 Pod-to-Pod communication",
        "모든 Pod에 mount되는 shared 호스트 filesystem",
        "각 노드마다 별도의 REST API server",
        "모든 컨테이너 이미지를 노드 간 복사하는 cache"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Kubernetes networking expects Pods to communicate directly with one another across nodes, subject to the cluster network implementation, without requiring application-specific proxies or address translation. Storage, API servers, and image distribution are separate concerns.",
      "ko": "Kubernetes networking은 클러스터 네트워크 implementation에 따라 서로 다른 노드의 Pod가 애플리케이션-특정 proxy나 address translation 없이 직접 통신할 수 있기를 기대합니다. 스토리지, API server, 이미지 distribution은 별도의 관심사입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/cluster-administration/networking/"
  },
  {
    "id": "local-099",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Rollout monitoring · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which command watches the rollout status of a Deployment until the latest rollout completes?",
      "ko": "최신 rollout이 완료될 때까지 Deployment rollout 상태를 관찰하는 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl rollout status deployment/web",
        "kubectl rollout watch deployment/web",
        "kubectl deployment progress web",
        "kubectl get rollout deployment/web"
      ],
      "ko": [
        "kubectl rollout 상태 deployment/web",
        "kubectl rollout watch deployment/web",
        "kubectl deployment progress web",
        "kubectl get rollout deployment/web"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "kubectl rollout status deployment/web watches and reports the Deployment's latest rollout until it completes by default. The status subcommand also supports DaemonSets and StatefulSets; the other command forms are not valid kubectl rollout commands.",
      "ko": "kubectl rollout 상태 deployment/web은 기본적으로 Deployment의 latest rollout을 watch하고 완료될 때까지 상태를 보고합니다. 상태 subcommand는 DaemonSet과 StatefulSet도 지원하며 나머지 command 형식은 유효한 kubectl rollout command가 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_rollout/kubectl_rollout_status/"
  },
  {
    "id": "local-100",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Distributed tracing · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "In distributed tracing, what does a span represent compared with a trace?",
      "ko": "분산 tracing에서 trace와 비교할 때 span은 무엇을 나타냅니까?"
    },
    "choices": {
      "en": [
        "One operation or unit of work within a request trace",
        "The complete end-to-end path of a request across services",
        "A cumulative count of requests since process start",
        "A log-retention policy for telemetry"
      ],
      "ko": [
        "요청 trace 안의 하나의 operation 또는 work unit",
        "여러 서비스를 가로지르는 요청의 완전한 end-to-end path",
        "프로세스 시작 이후 요청의 cumulative 개수",
        "telemetry의 log-retention 정책"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A span represents one operation or unit of work, and related spans are assembled into a trace that shows the request's end-to-end path. A trace is not a counter or a retention policy.",
      "ko": "span은 하나의 operation 또는 work unit을 나타내며, 관련 span이 모여 요청의 end-to-end path를 보여 주는 trace가 됩니다. trace는 counter나 retention 정책가 아닙니다."
    },
    "ref": "https://opentelemetry.io/docs/concepts/signals/traces/"
  },
  {
    "id": "local-101",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "API objects and representations · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "How should a Kubernetes Pod or Service be understood when it is defined in YAML?",
      "ko": "YAML로 정의된 Kubernetes Pod 또는 Service를 어떻게 이해해야 합니까?"
    },
    "choices": {
      "en": [
        "As a Kubernetes API object/resource commonly represented in YAML or JSON",
        "As a YAML-only file that is not an API resource",
        "As a container image format interpreted by the runtime",
        "As a network packet format used by kube-proxy"
      ],
      "ko": [
        "YAML 또는 JSON으로 흔히 표현되는 Kubernetes API 객체/리소스",
        "API 리소스가 아닌 YAML 전용 파일",
        "런타임이 해석하는 컨테이너 이미지 형식",
        "kube-proxy가 사용하는 네트워크 packet 형식"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Pods and Services are Kubernetes API resources managed through the Kubernetes API. YAML and JSON are common serialization formats for manifest; they do not define the resource's object model.",
      "ko": "Pod와 Service는 Kubernetes API를 통해 관리되는 Kubernetes API 리소스입니다. YAML과 JSON은 매니페스트에 사용하는 serialization 형식일 뿐 리소스의 객체 model 자체를 정의하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/using-api/api-concepts/"
  },
  {
    "id": "local-102",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Selectorless Services · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What must an operator provide for a Service that intentionally has no selector but should route to external backends?",
      "ko": "의도적으로 selector가 없지만 external 백엔드으로 트래픽을 routing해야 하는 Service에 운영자가 제공해야 하는 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "A corresponding EndpointSlice (or endpoint mapping) created and maintained by Kubernetes",
        "A second kube-apiserver dedicated to that Service",
        "A Deployment that Kubernetes can use to infer every backend",
        "A ClusterIP value that contains all backend addresses"
      ],
      "ko": [
        "해당 Service를 위해 수동으로 생성하고 관리하는 대응 EndpointSlice(또는 endpoint mapping)",
        "그 Service 전용의 두 번째 kube-apiserver",
        "Kubernetes가 모든 백엔드를 추론할 수 있는 Deployment",
        "모든 백엔드 address를 포함하는 ClusterIP 값"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Without a selector, Kubernetes does not automatically create EndpointSlices for the Service. An operator or different controller must define the corresponding EndpointSlice entries, including for backends outside the cluster.",
      "ko": "selector가 없으면 Kubernetes가 해당 Service의 EndpointSlice를 자동으로 생성하지 않습니다. 따라서 운영자 또는 다른 controller가 클러스터 외부 백엔드를 포함한 대응 EndpointSlice entry를 정의해야 합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/service/#services-without-selectors"
  },
  {
    "id": "local-103",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Immutable ConfigMaps · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What is the effect of setting `immutable: true` on a ConfigMap?",
      "ko": "ConfigMap에서 `immutable: true`를 설정하면 어떤 효과가 있습니까?"
    },
    "choices": {
      "en": [
        "The ConfigMap's data cannot be changed after creation",
        "The ConfigMap is encrypted automatically at rest",
        "The ConfigMap is copied into every namespace",
        "The ConfigMap can only be read by the kubelet"
      ],
      "ko": [
        "생성 후 ConfigMap의 data를 변경할 수 없습니다",
        "ConfigMap이 자동으로 at-rest encryption됩니다",
        "ConfigMap이 모든 네임스페이스에 복사됩니다",
        "kubelet만 ConfigMap을 읽을 수 있습니다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "An immutable ConfigMap prevents later updates to its data. It does not provide secrecy or encryption, replicate the object across namespace, or restrict reads to the kubelet; use a Secret or additional controls for confidential data.",
      "ko": "immutable ConfigMap은 이후 data update를 방지합니다. 이것이 secrecy나 encryption을 제공하거나 객체를 네임스페이스 간 복제하거나 kubelet에만 read를 허용하는 것은 아니며, confidential data에는 Secret 또는 추가 제어을 사용해야 합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/configuration/configmap/#configmap-immutable"
  },
  {
    "id": "local-104",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Pod scheduling unit · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What does a Kubernetes Pod package for scheduling?",
      "ko": "Kubernetes Pod는 스케줄링을 위해 무엇을 묶습니까?"
    },
    "choices": {
      "en": [
        "One or more co-located containers sharing specified network and storage resources",
        "Every replica of a Deployment across the whole cluster",
        "A complete worker node and its operating system",
        "Only a container image before it is started"
      ],
      "ko": [
        "지정된 네트워크와 스토리지 리소스를 공유하며 함께 배치되는 하나 이상의 컨테이너",
        "클러스터 전체에 있는 Deployment의 모든 replica",
        "worker node와 그 운영 체제 전체",
        "시작되기 전의 컨테이너 이미지만"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A Pod is the smallest deployable unit and groups one or more containers that are co-located and co-scheduled, with shared context such as network and storage resources. A Pod is not a node or a container image.",
      "ko": "Pod는 가장 작은 배포 단위이며 네트워크와 스토리지 같은 공유 환경을 사용하는 하나 이상의 컨테이너를 함께 배치합니다. Pod는 노드 전체나 컨테이너 이미지가 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/pods/"
  },
  {
    "id": "local-106",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Incident management · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which activity belongs to incident management during a production incident?",
      "ko": "production 인시던트 중 인시던트 관리에 해당하는 활동는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Assigning response roles and coordinating work to restore normal operations",
        "Planning capacity for a future traffic increase",
        "Writing a post-incident review after service restoration",
        "Benchmarking a proposed change before the next release"
      ],
      "ko": [
        "정상 operation을 복구하기 위해 응답 역할을 배정하고 work를 조정하는 것",
        "향후 트래픽 증가를 위한 capacity를 planning하는 것",
        "서비스 복구 후 post-인시던트 review를 작성하는 것",
        "다음 릴리스 전 제안된 change를 benchmark하는 것"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "incident management structures response roles and coordination while the incident is active, helping limit disruption and restore normal operations. Capacity planning, pre-release benchmarking, and post-incident review are valuable SRE practices but belong to other phases of reliability work.",
      "ko": "인시던트 관리는 인시던트가 active한 동안 응답 역할과 coordination을 구조화하여 disruption을 제한하고 정상 operation을 복구하도록 돕습니다. capacity planning, 릴리스 전 benchmarking, post-인시던트 review도 중요한 SRE practice이지만 신뢰성 work의 다른 phase에 해당합니다."
    },
    "ref": "https://sre.google/sre-book/managing-incidents/"
  },
  {
    "id": "local-107",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Dynamic volume provisioning · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "When does dynamic provisioning create backing storage for a PersistentVolumeClaim?",
      "ko": "동적 프로비저닝은 PersistentVolumeClaim을 위해 언제 backing 스토리지를 생성합니까?"
    },
    "choices": {
      "en": [
        "When no existing PersistentVolume matches and the StorageClass provisioner's binding condition are met",
        "Immediately for every claim, even if a matching PersistentVolume already exists",
        "Only after an administrator manually creates every PersistentVolume",
        "When the kubelet converts the claim into a ConfigMap"
      ],
      "ko": [
        "일치하는하는 기존 PersistentVolume이 없고 StorageClass provisioner의 바인딩 조건이 충족될 때",
        "일치하는하는 PersistentVolume이 있어도 모든 claim에 대해 즉시",
        "administrator가 모든 PersistentVolume을 수동으로 생성한 후에만",
        "kubelet이 claim을 ConfigMap으로 변환할 때"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "dynamic provisioning can create a volume on demand when a claim cannot bind to an existing PersistentVolume and the referenced StorageClass and provisioner can satisfy it. Binding and provisioning may also wait for applicable condition such as volume-binding mode and topology; it is not an unconditional immediate action for every claim.",
      "ko": "claim이 기존 PersistentVolume에 bind되지 않고 참조한 StorageClass와 provisioner가 요청을 충족할 수 있을 때 동적 프로비저닝은 필요에 따라 볼륨을 생성할 수 있습니다. 바인딩과 provisioning은 볼륨-바인딩 mode와 topology 같은 조건에 따라 기다릴 수도 있으므로 모든 claim에 대해 무조건 즉시 수행되는 것은 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/storage/dynamic-provisioning/"
  },
  {
    "id": "local-108",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Cloud cost management · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What is the central aim of FinOps-style cloud cost management?",
      "ko": "FinOps 방식의 cloud cost 관리의 핵심 목표은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Make technology value and cost visible so teams can make data-driven optimization decisions",
        "Freeze all technology spending regardless of business value",
        "Move every workload to a single cloud provider",
        "Let only the finance department decide how engineering uses technology"
      ],
      "ko": [
        "technology 값와 cost를 visible하게 하여 팀이 data-driven optimization decision을 내리게 하는 것",
        "business 값와 관계없이 모든 technology spending을 동결하는 것",
        "모든 워크로드를 단일 cloud provider로 이동하는 것",
        "finance department만 engineering의 technology 사용 방식을 결정하게 하는 것"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "FinOps is a collaborative operating practice that creates financial accountability, improves visibility, and helps teams optimize technology value and cost through data-driven decisions. It is not simply a blanket spending freeze or a finance-only process.",
      "ko": "FinOps는 financial accountability와 visibility를 높이고 data-driven decision을 통해 technology 값와 cost를 optimize하도록 돕는 collaborative operating practice입니다. 단순한 일괄 spending freeze나 finance-만 프로세스가 아닙니다."
    },
    "ref": "https://www.finops.org/introduction/what-is-finops/"
  },
  {
    "id": "local-109",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "nodeSelector · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What does a Pod's `nodeSelector` require when it is scheduled?",
      "ko": "Pod의 `nodeSelector`는 scheduling될 때 무엇을 요구합니까?"
    },
    "choices": {
      "en": [
        "The node has every specified label key/value pair",
        "At least one specified label is enough for the node to qualify",
        "The selector is only a soft preference that the scheduler may ignore",
        "The selector names a node direct instead of matching node labels"
      ],
      "ko": [
        "노드가 지정된 모든 label key/값 pair를 가집니다",
        "지정된 label 중 하나만 있으면 노드가 qualify됩니다",
        "selector는 scheduler가 무시할 수 있는 soft preference입니다",
        "selector가 노드 label을 일치하는하지 않고 노드를 직접 지정합니다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "nodeSelector is a hard scheduling constraint: every specified label must match on the chosen node. It affects placement of a new Pod; changing a node label later does not evict a Pod that is already running, and the selector does not create nodes.",
      "ko": "nodeSelector는 hard 스케줄링 제약 조건이므로 지정된 모든 label이 선택된 노드에서 일치하는되어야 합니다. 이는 새 Pod의 placement에 적용되며 이후 노드 label을 변경해도 이미 실행 중인 Pod를 evict하지 않고 selector가 노드를 생성하지도 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#nodeselector"
  },
  {
    "id": "local-110",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Namespaces and labels · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which statement correctly distinguishes Kubernetes namespace from labels?",
      "ko": "Kubernetes 네임스페이스와 label을 올바르게 구분한 설명은 무엇입니까?"
    },
    "choices": {
      "en": [
        "A namespace scopes and organizes namespaced resources, while labels are key/value metadata used for selection and queries",
        "A namespace is a packet firewall, while labels encrypt Pod traffic",
        "A label creates a separate API server, while a namespace selects container images",
        "Namespaces and labels are interchangeable names for the same mechanism"
      ],
      "ko": [
        "네임스페이스는 namespaced 리소스의 범위와 organization을 제공하고 label은 selection과 query에 사용하는 key/값 metadata입니다",
        "네임스페이스는 packet firewall이고 label은 Pod 트래픽을 암호화합니다",
        "label은 별도 API server를 생성하고 네임스페이스는 컨테이너 이미지를 선택합니다",
        "네임스페이스와 label은 같은 메커니즘의 서로 바꿔 쓸 수 있는 이름입니다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Namespaces provide scope and logical organization for namespaced resources; labels attach key/value metadata that selectors use to group or query object. Neither mechanism alone is a network-security policy.",
      "ko": "네임스페이스는 namespaced 리소스에 범위와 logical organization을 제공하고 label은 객체를 group하거나 query하기 위해 selector가 사용하는 key/값 metadata를 붙입니다. 어느 메커니즘도 단독으로 네트워크-보안 정책가 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"
  },
  {
    "id": "local-111",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Preferred node affinity · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What does `preferredDuringSchedulingIgnoredDuringExecution` express in node affinity?",
      "ko": "node affinity에서 `preferredDuringSchedulingIgnoredDuringExecution`은 무엇을 표현합니까?"
    },
    "choices": {
      "en": [
        "A soft preference that contributes to node scoring",
        "A mandatory rule that excludes every non-matching node",
        "An eviction rule triggered when a node label changes",
        "A rule that creates a node carrying the preferred labels"
      ],
      "ko": [
        "노드 scoring에 기여하는 soft preference",
        "일치하는하지 않는 모든 노드를 제외하는 mandatory 규칙",
        "노드 label 변경 시 작동하는 eviction 규칙",
        "선호되는 label을 가진 노드를 생성하는 규칙"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The scheduler adds the weights of satisfied preferred rule to its overall node score. Another eligible node can still win on the total score, and IgnoredDuringExecution means later label changes do not evict the running Pod.",
      "ko": "scheduler는 충족된 선호되는 규칙의 weight를 overall 노드 score에 더합니다. 다른 eligible 노드가 total score에서 이길 수 있으며 IgnoredDuringExecution은 이후 label 변경이 실행 중인 Pod를 evict하지 않는다는 뜻입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#node-affinity"
  },
  {
    "id": "local-112",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "CNCF community roles · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is a common role of a CNCF Ambassador?",
      "ko": "CNCF Ambassador의 일반적인 역할은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Promoting cloud-native adoption through community leadership, mentoring, event, and advocacy",
        "Approving every CNCF project's production code before release",
        "Allocating a project's operating budget and signing vendor contracts",
        "Setting a project's technical roadmap and release criteria"
      ],
      "ko": [
        "community leadership, mentoring, 이벤트, advocacy를 통해 cloud-native adoption을 촉진하는 것",
        "릴리스 전에 모든 CNCF 프로젝트의 production code를 승인하는 것",
        "프로젝트 operating budget을 배정하고 vendor contract에 서명하는 것",
        "프로젝트의 technical roadmap과 릴리스 criteria를 정하는 것"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "CNCF Ambassadors extend CNCF's community mission through leadership, mentorship, event, and advocacy that help make cloud native more widely understood and adopted. Project maintainers or technical leadership set roadmaps and release criteria; finance and project governance roles handle budgets and approvals.",
      "ko": "CNCF Ambassador는 leadership, mentorship, 이벤트, advocacy를 통해 cloud native를 더 널리 이해하고 채택하도록 CNCF community mission을 확장합니다. 프로젝트 maintainer 또는 technical leadership이 roadmap과 릴리스 criteria를 정하고 finance와 프로젝트 거버넌스 역할이 budget과 approval을 담당합니다."
    },
    "ref": "https://www.cncf.io/people/ambassadors/"
  },
  {
    "id": "local-113",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Prometheus metric types · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which set contains Prometheus’s four core metric types?",
      "ko": "Prometheus의 네 가지 core 메트릭 유형을 포함하는 조합은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Counter, Gauge, Histogram, and Summary",
        "Counter, Timer, Event, and Trace",
        "Gauge, Log, Span, and Histogram",
        "Histogram, Summary, Alert, and Dashboard"
      ],
      "ko": [
        "Counter, Gauge, Histogram, Summary",
        "Counter, Timer, Event, Trace",
        "Gauge, Log, Span, Histogram",
        "Histogram, Summary, Alert, Dashboard"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Prometheus instrumentation libraries provide Counter, Gauge, Histogram, and Summary as the four core metric types. A Counter accumulates, a Gauge can move up or down, and Histogram and Summary describe observations and distributions in different ways.",
      "ko": "Prometheus instrumentation library의 네 가지 core 메트릭 유형은 Counter, Gauge, Histogram, Summary입니다. Counter는 누적되고 Gauge는 오르내릴 수 있으며 Histogram과 Summary는 서로 다른 방식으로 observation과 distribution을 설명합니다."
    },
    "ref": "https://prometheus.io/docs/concepts/metric_types/"
  },
  {
    "id": "local-114",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "ServiceAccount assignment · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "How does a Pod select a ServiceAccount and receive its token by default?",
      "ko": "Pod는 어떻게 ServiceAccount를 선택하고 기본적으로 token을 받습니까?"
    },
    "choices": {
      "en": [
        "Set `spec.serviceAccountName`; with automount enabled, Kubernetes projects that account's token into the Pod",
        "Bake an RBAC token into the container image; RBAC then selects the account automatically",
        "Set a nodeSelector; kube-scheduler injects a token for the matching node",
        "Set a namespace label; the API server grants every Pod the same permission"
      ],
      "ko": [
        "`spec.serviceAccountName`을 설정하며 automount가 enabled이면 Kubernetes가 해당 account의 token을 Pod에 project합니다",
        "컨테이너 이미지에 RBAC token을 bake하면 RBAC가 account를 자동 선택합니다",
        "nodeSelector를 설정하면 kube-scheduler가 일치하는 노드의 token을 주입합니다",
        "네임스페이스 label을 설정하면 API server가 모든 Pod에 같은 권한을 부여합니다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "`spec.serviceAccountName` chooses the Pod's ServiceAccount. When automatic mounting is enabled, Kubernetes projects credentials for that account into the Pod; RBAC bindings separately determine what the identity is authorized to do. Credentials are not baked into the image.",
      "ko": "`spec.serviceAccountName`이 Pod의 ServiceAccount를 선택합니다. automatic mounting이 enabled이면 Kubernetes가 해당 account의 credential을 Pod에 project하며, RBAC binding은 그 identity가 할 수 있는 일을 별도로 결정합니다. credential은 image에 bake되지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/service-accounts/"
  },
  {
    "id": "local-115",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Controller reconciliation · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which component runs controllers that reconcile Deployment and ReplicaSet desired status?",
      "ko": "Deployment와 ReplicaSet의 희망하는 상태를 reconcile하는 controller를 실행하는 구성 요소는 무엇입니까?"
    },
    "choices": {
      "en": [
        "kube-controller-manager",
        "kube-apiserver",
        "kube-scheduler",
        "kubelet"
      ],
      "ko": [
        "kube-controller-관리자",
        "kube-apiserver",
        "kube-scheduler",
        "kubelet"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "kube-controller-manager runs built-in controllers, including controllers that observe workload resources and move actual status toward the Deployment or ReplicaSet desired status. The API server exposes the API, the scheduler assigns Pods to nodes, and the kubelet runs containers on a node.",
      "ko": "kube-controller-관리자는 내장 controller를 실행하며 워크로드 리소스를 관찰하고 실제 상태를 Deployment 또는 ReplicaSet의 희망하는 상태로 수렴시키는 controller도 포함합니다. API server는 API를 제공하고 scheduler는 Pod를 노드에 배치하며 kubelet은 노드에서 컨테이너를 실행합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/architecture/controller/"
  },
  {
    "id": "local-116",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Deployment strategies · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which rollout strategy does a Kubernetes Deployment use by default?",
      "ko": "Kubernetes Deployment가 기본적으로 사용하는 rollout 전략는 무엇입니까?"
    },
    "choices": {
      "en": [
        "RollingUpdate",
        "Recreate",
        "Blue/Green using separate Deployments",
        "Canary using a separate traffic split"
      ],
      "ko": [
        "RollingUpdate",
        "Recreate",
        "별도 Deployment를 사용하는 Blue/Green",
        "별도 트래픽 split을 사용하는 Canary"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A Deployment defaults to RollingUpdate, which incrementally replaces old Pods with new ones. Recreate is an alternative Deployment strategy; Blue/Green and Canary are rollout patterns that require additional resources or traffic handling rather than being this default strategy.",
      "ko": "Deployment의 기본 전략는 RollingUpdate이며 이전 Pod를 새로운 Pod로 점진적으로 교체합니다. Recreate는 대안 Deployment 전략이고 Blue/Green과 Canary는 추가 리소스나 트래픽 handling이 필요한 rollout pattern이지 이 기본 전략가 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#strategy"
  },
  {
    "id": "local-117",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "NetworkPolicy isolation · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What can a NetworkPolicy change for selected Pods?",
      "ko": "NetworkPolicy는 선택한 Pod에 대해 무엇을 변경할 수 있습니까?"
    },
    "choices": {
      "en": [
        "The allowed ingress and egress traffic, making the Pods isolated for the directions covered by policy",
        "The node labels used to schedule the selected Pods",
        "The container image and restart behavior of the selected Pods",
        "The API permission of the selected Pods' ServiceAccount"
      ],
      "ko": [
        "허용되는 ingress와 egress 트래픽을 변경하여 정책가 적용되는 방향에서 Pod를 isolated 상태로 만들 수 있습니다",
        "선택한 Pod를 schedule할 때 사용하는 노드 label을 변경합니다",
        "선택한 Pod의 컨테이너 이미지와 restart behavior를 변경합니다",
        "선택한 Pod의 ServiceAccount API 권한을 변경합니다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "NetworkPolicy selects Pods and defines allowed ingress and egress traffic. Applying policy to a direction makes the selected Pods isolated for that direction; actual enforcement requires a network plugin that supports NetworkPolicy.",
      "ko": "NetworkPolicy는 Pod를 선택하고 허용되는 ingress와 egress 트래픽을 정의합니다. 특정 direction에 정책를 적용하면 선택된 Pod가 해당 direction에서 isolated 상태가 되며, 실제 enforcement에는 NetworkPolicy를 지원하는 네트워크 plugin이 필요합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/network-policies/"
  },
  {
    "id": "local-118",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "etcd performance · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which resource constraints are especially important to etcd cluster performance?",
      "ko": "etcd 클러스터 performance에 특히 중요한 리소스 제약 조건는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Network throughput/latency and disk I/O latency",
        "CPU and memory only; storage latency is irrelevant",
        "Kubernetes DNS latency and Service port allocation",
        "Container image pull speed and Pod restart policy"
      ],
      "ko": [
        "네트워크 throughput/latency와 disk I/O latency",
        "CPU와 memory만이며 스토리지 latency는 무관합니다",
        "Kubernetes DNS latency와 Service port allocation",
        "컨테이너 이미지 pull speed와 Pod restart 정책"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "etcd uses networked consensus communication and durable writes, so network latency/throughput and storage I/O latency are important performance constraints. CPU and memory still matter, but they are not the complete diagnosis.",
      "ko": "etcd는 네트워크 consensus communication과 durable write를 사용하므로 네트워크 latency/throughput과 스토리지 I/O latency가 중요한 performance 제약 조건입니다. CPU와 memory도 중요하지만 완전한 diagnosis는 아닙니다."
    },
    "ref": "https://etcd.io/docs/v3.5/learning/why/"
  },
  {
    "id": "local-119",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "Manifest application · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which command applies a declarative workload manifest and can update an existing resource?",
      "ko": "declarative 워크로드 매니페스트를 apply하고 기존 리소스를 update할 수 있는 명령는 무엇입니까?"
    },
    "choices": {
      "en": [
        "`kubectl apply -f manifest.yaml`",
        "`kubectl create -f manifest.yaml`",
        "`helm install app ./chart`",
        "`kubectl get -f manifest.yaml`"
      ],
      "ko": [
        "`kubectl apply -f 매니페스트.yaml`",
        "`kubectl create -f 매니페스트.yaml`",
        "`helm install app ./chart`",
        "`kubectl get -f 매니페스트.yaml`"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "kubectl apply submits a declarative configuration and can reconcile changes to an existing resource. kubectl create is primarily a create operation, Helm installs charts, and kubectl get reads resource state.",
      "ko": "kubectl apply는 declarative configuration을 제출하고 existing resource의 변경을 reconcile할 수 있습니다. kubectl create는 주로 create operation이고 Helm은 chart를 install하며 kubectl get은 resource state를 읽습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_apply/"
  },
  {
    "id": "local-120",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Orchestration responsibilities · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which set best describes core container-orchestration responsibilities?",
      "ko": "컨테이너 orchestration의 core responsibility를 가장 잘 나타내는 조합은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Scheduling containers, scaling instances, and managing container status",
        "Building application source code, storing Git commits, and writing documentation",
        "Assigning public DNS names, issuing certificates, and billing cloud accounts",
        "Designing UI screens, compiling kernels, and managing databases"
      ],
      "ko": [
        "컨테이너를 스케줄링하고 instance를 scale하며 컨테이너 상태를 관리하는 것",
        "애플리케이션 소스 code를 빌드하고 Git commit을 저장하며 documentation을 작성하는 것",
        "퍼블릭 DNS name을 할당하고 certificate를 발급하며 cloud account를 billing하는 것",
        "UI screen을 설계하고 kernel을 compile하며 데이터베이스를 관리하는 것"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Container orchestration coordinates placement, scaling, and status/lifecycle management of containers. Source builds, billing, UI design, and database administration are separate concerns.",
      "ko": "컨테이너 orchestration은 컨테이너의 placement, scaling, 상태/lifecycle 관리를 조정합니다. 소스 빌드, billing, UI design, 데이터베이스 administration은 별도의 관심사입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/"
  },
  {
    "id": "local-121",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Hybrid cloud · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which scenario best illustrates a hybrid cloud?",
      "ko": "다음 중 hybrid cloud를 가장 잘 보여 주는 시나리오는 무엇입니까?"
    },
    "choices": {
      "en": [
        "An organization integrates its on-premises private cloud with a public cloud so workloads or data can move or burst between them",
        "An organization uses only a private cloud isolated from every public provider",
        "An organization uses multiple unrelated public-cloud accounts with no private infrastructure",
        "A single public-cloud region runs all workloads without connection to another environment"
      ],
      "ko": [
        "조직이 on-premises private cloud를 public cloud와 연결하여 workload나 data를 두 환경 사이에서 이동하거나 필요할 때 public cloud로 확장합니다",
        "조직이 모든 public provider와 격리된 private cloud만 사용합니다",
        "조직이 private infrastructure 없이 서로 연결되지 않은 여러 public-cloud account를 사용합니다",
        "하나의 public-cloud region이 다른 환경과 연결되지 않은 채 모든 workload를 실행합니다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "NIST defines hybrid cloud as a composition of two or more distinct cloud infrastructures, such as private, community, or public clouds, that remain unique entities but are bound by technology enabling data and application portability. For example, an on-premises private cloud can be integrated with a public cloud so workloads can burst into the public cloud during demand spikes.",
      "ko": "NIST는 hybrid cloud를 private, community 또는 public cloud처럼 서로 구별되는 두 개 이상의 cloud infrastructure를 결합한 구성으로 정의합니다. 각 infrastructure는 고유한 entity로 남지만 data와 application portability를 가능하게 하는 기술로 연결됩니다. 예를 들어 on-premises private cloud는 수요가 급증할 때 workload를 public cloud로 확장할 수 있습니다."
    },
    "ref": "https://csrc.nist.gov/glossary/term/hybrid_cloud"
  },
  {
    "id": "local-122",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Service endpoints · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What does a Kubernetes Service endpoint represent?",
      "ko": "Kubernetes Service endpoint는 무엇을 나타냅니까?"
    },
    "choices": {
      "en": [
        "The IP address and port of an actual backend, commonly a matching Pod",
        "The Service's virtual ClusterIP used as the client entry point",
        "The label selector that identifies which Pods belong to the Service",
        "The URL used to reach the Kubernetes API server"
      ],
      "ko": [
        "실제 백엔드(일반적으로 일치하는 Pod)의 IP address와 port",
        "client entry point로 사용하는 Service의 virtual ClusterIP",
        "Service에 속하는 Pod를 식별하는 label selector",
        "Kubernetes API server에 접근하는 URL"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "EndpointSlice resources track the IP addresses and ports of Service backends, commonly matching Pods, and are updated as the backend set changes. A Service's ClusterIP is a virtual entry point and its selector is a matching rule, not a backend endpoint.",
      "ko": "EndpointSlice 리소스는 Service 백엔드(일반적으로 일치하는 Pod)의 IP address와 port를 추적하고 백엔드 set이 바뀌면 update됩니다. Service의 ClusterIP는 virtual entry point이고 selector는 일치하는 규칙이지 백엔드 endpoint가 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/endpoint-slices/"
  },
  {
    "id": "local-123",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Cloud-native agility · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What capability is a stated benefit of cloud-native practices combined with robust automation?",
      "ko": "robust automation과 결합된 cloud-native practice의 stated benefit은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Making high-impact changes frequently and predictably with minimal toil",
        "Eliminating the need for all operational monitoring",
        "Requiring every service to share one deployment unit",
        "Preventing workload from running in public or hybrid clouds"
      ],
      "ko": [
        "최소한의 toil로 high-impact change를 자주, 예측 가능하게 수행하는 것",
        "모든 operational monitoring의 필요를 없애는 것",
        "모든 서비스가 하나의 deployment unit을 공유하도록 요구하는 것",
        "퍼블릭 또는 hybrid cloud에서 워크로드가 실행되는 것을 방지하는 것"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The cloud-native definition says robust automation lets organizations make high-impact changes frequently and predictably with minimal toil and clear separation of concerns. This is a benefit, not a claim that monitoring or operational work disappears.",
      "ko": "CNCF 정의은 robust automation이 organization이 최소 toil과 clear separation of 관심사s로 high-impact change를 자주, 예측 가능하게 수행하도록 한다고 설명합니다. 이는 benefit이지 monitoring이나 operational work가 사라진다는 뜻은 아닙니다."
    },
    "ref": "https://glossary.cncf.io/cloud-native-tech"
  },
  {
    "id": "local-124",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Restricted capabilities · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which capability may a Linux Pod add back under the Kubernetes Restricted Pod Security Standard after dropping `ALL` capabilities?",
      "ko": "`ALL` capability를 drop한 뒤 Kubernetes Restricted Pod Security Standard에서 Linux Pod가 다시 add할 수 있는 capability는 무엇입니까?"
    },
    "choices": {
      "en": [
        "NET_BIND_SERVICE",
        "SYS_ADMIN",
        "NET_RAW",
        "SYS_PTRACE"
      ],
      "ko": [
        "NET_BIND_SERVICE",
        "SYS_ADMIN",
        "NET_RAW",
        "SYS_PTRACE"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Restricted permits containers to drop ALL capabilities and add back only NET_BIND_SERVICE. The capability rule is Linux-specific in the documented policy; the other listed capabilities are not permitted add-backs.",
      "ko": "Restricted 정책는 컨테이너가 ALL capability를 drop한 뒤 NET_BIND_SERVICE만 다시 add하도록 허용합니다. 문서화된 정책의 이 capability 규칙은 Linux에 적용되며 다른 capability는 허용된 add-back이 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/pod-security-standards/#restricted"
  },
  {
    "id": "local-125",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "Deployment scaling commands · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which pair can change a Deployment's desired replica count?",
      "ko": "Deployment의 희망하는 replica 수를 변경할 수 있는 pair는 무엇입니까?"
    },
    "choices": {
      "en": [
        "`kubectl scale deployment/web --replicas=5` and `kubectl edit deployment/web`",
        "`kubectl rollout restart deployment/web` and `kubectl set image deployment/web app:v2`",
        "`kubectl logs deployment/web` and `kubectl get deployment/web`",
        "`kubectl expose deployment/web` and `kubectl port-forward deployment/web 8080:80`"
      ],
      "ko": [
        "`kubectl scale deployment/web --replicas=5`와 `kubectl edit deployment/web`",
        "`kubectl rollout restart deployment/web`와 `kubectl set image deployment/web app:v2`",
        "`kubectl logs deployment/web`와 `kubectl get deployment/web`",
        "`kubectl expose deployment/web`와 `kubectl port-forward deployment/web 8080:80`"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "kubectl scale changes the replica count imperatively, while kubectl edit opens the Deployment so its declarative replica configuration can be changed. Restarting, changing the image, inspecting, exposing, or forwarding traffic does not directly change the desired replica count.",
      "ko": "kubectl scale은 replica 수를 imperative하게 변경하고 kubectl edit은 Deployment를 열어 declarative replica 설정을 변경합니다. restart, image 변경, inspect, expose, 트래픽 forwarding은 desired replica 수를 직접 변경하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_scale/"
  },
  {
    "id": "local-126",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "containerd · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which description best fits containerd?",
      "ko": "containerd를 가장 잘 설명한 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "An industry-standard container runtime emphasizing simplicity, robustness, portability, and lifecycle/image/storage management",
        "A Kubernetes scheduler component that assigns Pods to nodes",
        "An OCI image builder that compiles application source code",
        "An API-server extension that stores Kubernetes object"
      ],
      "ko": [
        "simplicity, robustness, portability와 lifecycle/이미지/스토리지 관리에 중점을 둔 industry-standard 컨테이너 런타임",
        "Pod를 노드에 할당하는 Kubernetes scheduler 구성 요소",
        "애플리케이션 소스 code를 compile하는 OCI 이미지 builder",
        "Kubernetes 객체를 저장하는 API-server extension"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "containerd is an industry-standard runtime that manages a host's container lifecycle, including image transfer/storage, execution, supervision, and related networking. It is not a scheduler, image builder, or API-server storage extension.",
      "ko": "containerd는 호스트의 컨테이너 lifecycle을 관리하는 industry-standard 런타임으로 이미지 transfer/스토리지, 실행, supervision 및 관련 networking을 포함합니다. scheduler, 이미지 builder 또는 API-server 스토리지 extension이 아닙니다."
    },
    "ref": "https://containerd.io/"
  },
  {
    "id": "local-127",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "Vertical versus horizontal scaling · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What changes in vertical scaling compared with horizontal scaling?",
      "ko": "horizontal scaling과 비교할 때 vertical scaling에서는 무엇이 바뀝니까?"
    },
    "choices": {
      "en": [
        "The resources assigned to an existing application instance, such as CPU or memory, rather than the number of instances",
        "The number of application instances, while per-instance resources stay fixed",
        "Only the DNS name of a Service",
        "Only the number of worker nodes, never Pod resources"
      ],
      "ko": [
        "instance 수가 아니라 기존 애플리케이션 instance에 할당된 CPU나 memory 같은 리소스",
        "instance당 리소스는 고정하고 애플리케이션 instance 수",
        "Service의 DNS name만",
        "Pod 리소스는 절대 바꾸지 않고 worker 노드 수만"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Vertical scaling rightsizes already-running workload instances by changing resources such as CPU or memory. Horizontal scaling changes how many instances (Pods) run. Kubernetes VPA is designed to adjust resource requests and limits for the former case.",
      "ko": "vertical scaling은 CPU나 memory 같은 리소스를 변경하여 이미 실행 중인 워크로드 instance를 rightsizing합니다. horizontal scaling은 실행되는 instance(Pod) 수를 변경합니다. Kubernetes VPA는 전자의 리소스 요청와 limit을 조정하도록 설계되었습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/autoscaling/vertical-pod-autoscale/"
  },
  {
    "id": "local-128",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Dockerfile build instructions · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is a Dockerfile?",
      "ko": "Dockerfile이란 무엇입니까?"
    },
    "choices": {
      "en": [
        "A text document containing image-build instructions read by Docker to assemble an image",
        "A Bash script that runs as the container's long-lived process",
        "A prebuilt running container instance",
        "A Kubernetes manifest that schedules Pods on nodes"
      ],
      "ko": [
        "Docker가 이미지를 assemble할 때 읽는 이미지 빌드 명령을 담은 텍스트 문서",
        "컨테이너의 long-lived 프로세스로 실행되는 Bash script",
        "미리 빌드된 실행 중인 컨테이너 instance",
        "노드에 Pod를 schedule하는 Kubernetes 매니페스트"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A Dockerfile is a text document containing instructions used to build a container image. It is distinct from a Bash script, a running container, and a Kubernetes workload manifest.",
      "ko": "Dockerfile은 컨테이너 이미지를 빌드하는 데 사용하는 명령을 담은 텍스트 문서입니다. Bash script, 실행 중인 컨테이너, Kubernetes 워크로드 매니페스트와는 구별됩니다."
    },
    "ref": "https://docs.docker.com/reference/dockerfile/"
  },
  {
    "id": "local-129",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Node container runtime · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which node-level software creates and executes container processes when requested by the kubelet?",
      "ko": "kubelet의 요청을 받아 컨테이너 프로세스를 만들고 실행하는 노드-level software는 무엇입니까?"
    },
    "choices": {
      "en": [
        "A CRI-compatible container runtime",
        "The kube-scheduler running on the control plane",
        "The kube-apiserver that stores cluster status",
        "A container image registry"
      ],
      "ko": [
        "CRI 호환 컨테이너 런타임",
        "제어 plane에서 실행되는 kube-scheduler",
        "클러스터 상태를 저장하는 kube-apiserver",
        "컨테이너 이미지 registry"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The container runtime creates and executes container processes on each Pod-hosting node. The kubelet coordinates the Pod lifecycle through CRI, the interface between it and the runtime. Current Kubernetes requires a CRI-compatible runtime on each node; when Docker Engine is used, a CRI adapter such as cri-dockerd provides the integration.",
      "ko": "컨테이너 런타임은 각 Pod hosting 노드에서 컨테이너 프로세스를 만들고 실행합니다. kubelet은 런타임과의 인터페이스인 CRI를 통해 Pod lifecycle을 조정합니다. 현재 Kubernetes는 각 노드에 CRI 호환 런타임을 요구하며 Docker Engine을 사용할 때는 cri-dockerd 같은 CRI adapter가 연동을 제공합니다."
    },
    "ref": "https://kubernetes.io/docs/setup/production-environment/container-runtimes/"
  },
  {
    "id": "local-131",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Dual-stack Services · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "How can a Service request both IPv4 and IPv6 cluster IPs when dual-stack networking is enabled?",
      "ko": "dual-stack networking이 enabled일 때 Service가 IPv4와 IPv6 클러스터 IP를 모두 요청하려면 어떻게 합니까?"
    },
    "choices": {
      "en": [
        "Set `spec.ipFamilyPolicy` to `PreferDualStack` or `RequireDualStack`, with the result depending on cluster support and policy",
        "Set `spec.ipFamilyPolicy` to `SingleStack`, which always allocates both families",
        "Set a NetworkPolicy rule; it allocates Service IP families",
        "Use an Ingress hostname; Service IP-family allocation is inferred from DNS"
      ],
      "ko": [
        "`spec.ipFamilyPolicy`를 `PreferDualStack` 또는 `RequireDualStack`로 설정하며 결과는 cluster support와 policy에 따라 달라집니다",
        "`spec.ipFamilyPolicy`를 `SingleStack`으로 설정하면 항상 두 family를 할당합니다",
        "NetworkPolicy 규칙을 설정하면 Service IP family가 할당됩니다",
        "Ingress hostname을 사용하면 Service IP family allocation이 DNS에서 추론됩니다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A Service's `ipFamilyPolicy` controls whether it is single-stack or dual-stack. PreferDualStack requests both families when available and can fall back to single-stack; RequireDualStack fails creation if dual-stack is unavailable. The cluster's configured ranges and network support also matter.",
      "ko": "Service의 `ipFamilyPolicy`가 single-stack 또는 dual-stack 여부를 제어합니다. PreferDualStack은 가능할 때 두 family를 요청하고 single-stack으로 fallback할 수 있으며 RequireDualStack은 dual-stack이 불가능하면 creation이 실패합니다. cluster의 configured range와 network support도 중요합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/dual-stack/"
  },
  {
    "id": "local-132",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Security context and Pod Security Admission · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which statement correctly distinguishes a security context from Pod Security Admission?",
      "ko": "보안 context와 Pod Security Admission을 올바르게 구분한 설명은 무엇입니까?"
    },
    "choices": {
      "en": [
        "A security context configures Pod/container settings such as identities and capabilities, while Pod Security Admission enforces policy levels on Pod creation",
        "Pod Security Admission sets each container process UID, while securityContext labels the namespace for admission",
        "A security context is only a namespace admission mode, while Pod Security Admission sets seccomp syscalls for one container",
        "They are two names for the same per-container field"
      ],
      "ko": [
        "보안 context는 식별자와 capability 같은 Pod/컨테이너 설정을 구성하고 Pod Security Admission은 Pod 생성 시 정책 level을 enforce합니다",
        "Pod Security Admission은 각 컨테이너 프로세스 UID를 설정하고 securityContext는 네임스페이스에 admission label을 붙입니다",
        "보안 context는 네임스페이스 admission mode일 뿐이고 Pod Security Admission은 한 컨테이너의 seccomp syscall을 설정합니다",
        "둘은 같은 per-컨테이너 필드의 다른 이름입니다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A security context configures privilege and access-control settings for a Pod or container, including options such as user/group identity, capabilities, seccomp, and AppArmor. Pod Security Admission is an admission controller that applies Pod Security Standards at namespace-scoped policy levels; it can reject a violating Pod, but it is not itself a seccomp or AppArmor profile.",
      "ko": "보안 context는 user/group 식별자, capability, seccomp, AppArmor 등을 포함하여 Pod 또는 컨테이너의 privilege와 access-제어 설정을 구성합니다. Pod Security Admission은 네임스페이스 범위의 정책 level에서 Pod Security Standards를 적용하는 admission controller이며, 위반 Pod를 reject할 수 있지만 seccomp나 AppArmor profile 자체는 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/"
  },
  {
    "id": "local-133",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "OIDC authentication · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What does OIDC provide when configured as a Kubernetes authentication method?",
      "ko": "OIDC를 Kubernetes authentication method로 configure하면 무엇을 제공합니까?"
    },
    "choices": {
      "en": [
        "Authentication of users with JWTs issued by an OpenID Connect identity provider",
        "RBAC authorization rule without authenticating the user",
        "A service identity certificate that authenticates every workload to every peer",
        "Automatic encryption of every Pod-to-Pod packet"
      ],
      "ko": [
        "OpenID Connect 식별자 provider가 발급한 JWT를 사용한 user authentication",
        "user를 authenticate하지 않고 RBAC authorization 규칙을 제공하는 것",
        "모든 워크로드를 모든 peer에 authenticate하는 서비스 식별자 certificate",
        "모든 Pod-to-Pod packet의 automatic encryption"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Kubernetes can use JWTs from an OpenID Connect identity provider to authenticate API users. Authentication establishes identity; authorization, such as RBAC decisions, remains a separate step.",
      "ko": "Kubernetes는 OpenID Connect 식별자 provider의 JWT를 사용하여 API user를 authenticate할 수 있습니다. authentication은 식별자를 확립하고 RBAC decision 같은 authorization은 별도의 step으로 남습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/authentication/#openid-connect-tokens"
  },
  {
    "id": "local-134",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Rollout and rollback management · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which statement accurately describes Kubernetes Deployment update management?",
      "ko": "Kubernetes Deployment update 관리를 정확히 설명한 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "A Deployment can perform a controlled rollout and an operator can manually undo it to a prior revision",
        "Every failed rollout automatically restores the previous revision when its progress deadline expires",
        "A Deployment update edits one existing ReplicaSet in place and never creates a new revision",
        "Rollback means restoring a deleted container filesystem without a recorded revision"
      ],
      "ko": [
        "Deployment는 controlled rollout을 수행할 수 있고 운영자가 prior 리비전으로 수동 undo할 수 있습니다",
        "progress deadline이 만료되면 모든 failed rollout이 자동으로 previous 리비전으로 restore됩니다",
        "Deployment update는 기존 ReplicaSet 하나를 in place로 수정할 뿐 새 리비전을 만들지 않습니다",
        "rollback은 recorded 리비전 없이 deleted 컨테이너 filesystem을 복원하는 것입니다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Deployment controllers manage controlled updates, and Kubernetes provides rollout history and commands such as `kubectl rollout undo` for an operator to restore a prior revision. A progress deadline reports a stalled rollout; it does not by itself promise automatic rollback.",
      "ko": "Deployment controller는 controlled update를 관리하며 Kubernetes는 rollout history와 `kubectl rollout undo` 같은 command를 제공하여 운영자가 prior 리비전을 복원할 수 있게 합니다. progress deadline은 stalled rollout을 report할 뿐 자체적으로 automatic rollback을 보장하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"
  },
  {
    "id": "local-136",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Distributed tracing instrumentation · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Where is distributed tracing primarily implemented for an application?",
      "ko": "애플리케이션의 분산 tracing은 주로 어디에서 구현됩니까?"
    },
    "choices": {
      "en": [
        "In the application layer by instrumenting code, propagating trace context, and exporting trace data",
        "In a log collector that stores text event without trace context",
        "In a metrics exporter that aggregates counters and gauges without request spans",
        "In a registry scanner that records image findings instead of application operations"
      ],
      "ko": [
        "code를 instrument하고 trace context를 전파하며 trace data를 export하는 애플리케이션 계층에서",
        "trace context 없이 text 이벤트를 저장하는 log collector에서",
        "요청 span 없이 counter와 gauge를 집계하는 metrics exporter에서",
        "애플리케이션 operation 대신 이미지 finding을 기록하는 registry scanner에서"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "distributed tracing is implemented at the application layer: instrumented code creates spans, propagates trace context across service boundaries, and exports trace data to a tracing backend. The cluster scheduler and image registry do not create application trace context.",
      "ko": "분산 tracing은 애플리케이션 계층에서 구현됩니다. instrumented code가 span을 만들고 서비스 boundary를 넘어 trace context를 전파하며 trace data를 tracing 백엔드로 export합니다. 클러스터 scheduler와 이미지 registry는 애플리케이션 trace context를 만들지 않습니다."
    },
    "ref": "https://opentelemetry.io/docs/concepts/signals/traces/"
  },
  {
    "id": "local-137",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "CloudEvents interoperability · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What problem does the CloudEvents specification address?",
      "ko": "CloudEvents specification은 어떤 문제를 해결합니까?"
    },
    "choices": {
      "en": [
        "Describing event data in a common format so it can interoperate across services, platforms, and systems",
        "Executing event handlers on a schedule as a workflow engine",
        "Defining one mandatory transport protocol for every event broker",
        "Declaring Kubernetes deployment settings for event-consuming applications"
      ],
      "ko": [
        "서비스, 플랫폼, 시스템 사이에서 상호운용할 수 있도록 이벤트 data를 공통 형식으로 설명하는 것",
        "workflow engine으로 이벤트 handler를 schedule하여 실행하는 것",
        "모든 이벤트 broker에 하나의 mandatory transport protocol을 정의하는 것",
        "이벤트-consuming 애플리케이션의 Kubernetes deployment setting을 선언하는 것"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "CloudEvents is a specification for describing event data in a common way, simplifying declaration and delivery across services, platforms, and systems. It standardizes event data rather than acting as a workflow engine, imposing one broker transport, or replacing deployment manifest.",
      "ko": "CloudEvents는 서비스, 플랫폼, 시스템 전반에서 이벤트를 선언하고 전달하기 쉽도록 이벤트 data를 공통 방식으로 설명하는 specification입니다. workflow engine으로 동작하거나 하나의 broker transport를 강제하거나 deployment 매니페스트를 대체하지 않고 이벤트 data를 표준화합니다."
    },
    "ref": "https://cloudevents.io/"
  },
  {
    "id": "local-138",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Node controller health handling · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What does the node controller do when a node becomes unreachable?",
      "ko": "노드가 unreachable 상태가 되면 노드 controller는 무엇을 합니까?"
    },
    "choices": {
      "en": [
        "It updates the Node Ready condition to Unknown when the node is unreachable",
        "The kubelet direct changes the Ready condition to Unknown after it stops receiving heartbeats",
        "The scheduler changes the Ready condition to Unknown while selecting different node",
        "The API server changes the Ready condition to Unknown without a controller"
      ],
      "ko": [
        "노드가 unreachable이면 Node Ready 조건을 Unknown으로 update합니다",
        "heartbeat를 받지 못하면 kubelet이 Ready 조건을 직접 Unknown으로 변경합니다",
        "다른 노드를 선택하는 동안 scheduler가 Ready 조건을 Unknown으로 변경합니다",
        "controller 없이 API server가 Ready 조건을 Unknown으로 변경합니다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The node controller monitors node status and updates the Node Ready condition to Unknown when a node becomes unreachable. Subsequent handling, such as taints and any toleration-driven eviction, is a separate remediation path; this question concerns the status condition update.",
      "ko": "노드 controller는 노드 상태를 monitor하고 노드가 unreachable이면 Node Ready 조건을 Unknown으로 update합니다. 이후 taint와 toleration에 따른 eviction 같은 처리는 별도의 remediation 경로이며, 이 질문은 상태 조건 update에 관한 것입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/architecture/nodes/"
  },
  {
    "id": "local-139",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "Argo Workflows parallel jobs · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which tool is designed to orchestrate parallel jobs and workflows on Kubernetes?",
      "ko": "Kubernetes에서 parallel job과 workflow를 orchestrate하도록 설계된 tool은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Argo Workflows",
        "Flux",
        "kube-proxy",
        "containerd"
      ],
      "ko": [
        "Argo Workflows",
        "Flux",
        "kube-proxy",
        "containerd"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Argo Workflows is a Kubernetes-native workflow engine for orchestrating jobs, including parallel steps. Flux is primarily a GitOps reconciler, while kube-proxy and containerd serve node networking and container-runtime roles.",
      "ko": "Argo Workflows는 parallel step을 포함한 job을 orchestrate하는 Kubernetes-native workflow engine입니다. Flux는 주로 GitOps reconciler이며 kube-proxy와 containerd는 각각 노드 networking과 컨테이너-런타임 역할을 합니다."
    },
    "ref": "https://argo-workflows.readthedocs.io/en/latest/workflow-concepts/"
  },
  {
    "id": "local-140",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Service mesh capabilities · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which set of capabilities is commonly provided by a service mesh?",
      "ko": "서비스 mesh가 일반적으로 제공하는 capability 조합은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Service-to-service security such as mTLS and policy, traffic management, and observability",
        "Container image building, registry storage, and node kernel upgrades",
        "Cluster object persistence, API authentication, and etcd compaction only",
        "Source-code compilation, database schema migration, and DNS registration only"
      ],
      "ko": [
        "mTLS와 정책 같은 서비스-to-서비스 보안, 트래픽 관리, 관측성",
        "컨테이너 이미지 빌드, registry 스토리지, 노드 kernel upgrade",
        "클러스터 객체 persistence, API authentication, etcd compaction만",
        "소스-code compilation, 데이터베이스 schema migration, DNS registration만"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A service mesh adds application-aware service-to-service capabilities through its infrastructure layer, including mTLS and policy controls, traffic management, and telemetry/observability. It does not replace image builders or the Kubernetes API datastore.",
      "ko": "서비스 mesh는 infrastructure 계층를 통해 mTLS와 정책 제어, 트래픽 관리, telemetry/관측성 같은 애플리케이션-aware 서비스-to-서비스 capability를 추가합니다. 이미지 builder나 Kubernetes API datastore를 대체하지 않습니다."
    },
    "ref": "https://istio.io/latest/about/service-mesh/"
  },
  {
    "id": "local-141",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Cluster management platforms · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is Apache Mesos?",
      "ko": "Apache Mesos란 무엇입니까?"
    },
    "choices": {
      "en": [
        "Cluster-management and resource-scheduling software that can support container orchestration",
        "A Kubernetes container runtime implementation",
        "A cloud infrastructure platform for virtual machines and networks",
        "A command-line tool that builds Docker images"
      ],
      "ko": [
        "컨테이너 orchestration을 지원할 수 있는 클러스터-관리 및 리소스-스케줄링 software",
        "Kubernetes 컨테이너 런타임 implementation",
        "virtual machine과 네트워크를 위한 cloud infrastructure 플랫폼",
        "Docker 이미지를 빌드하는 명령-line tool"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Apache Mesos is cluster-management software that abstracts and schedules resources across a cluster and can support containerized workload. It is distinct from CRI-O, OpenStack, and Docker image tooling.",
      "ko": "Apache Mesos는 클러스터 리소스를 추상화하고 schedule하며 containerized 워크로드를 지원할 수 있는 클러스터-관리 software입니다. CRI-O, OpenStack, Docker 이미지 tooling과는 다릅니다."
    },
    "ref": "https://mesos.apache.org/"
  },
  {
    "id": "local-142",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "API maturity levels · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What does a beta Kubernetes API version generally indicate?",
      "ko": "Kubernetes beta API version은 일반적으로 무엇을 의미합니까?"
    },
    "choices": {
      "en": [
        "A beta maturity level that is tested but can still change incompatibly before becoming stable",
        "An API that is always enabled by default and can never be deprecated",
        "A permanently experimental API that every cluster disables",
        "An API available only to the kubelet and not to API clients"
      ],
      "ko": [
        "test되었지만 안정적인이 되기 전에 incompatible하게 변경될 수 있는 beta maturity level",
        "항상 기본 enabled이고 절대 deprecated되지 않는 API",
        "모든 클러스터에서 disable되는 영구적인 experimental API",
        "kubelet에만 제공되고 API client에는 제공되지 않는 API"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A beta API is a maturity level that has been tested but can still change in incompatible ways; beta and stable versions are not necessarily long-term compatible contracts. Current Kubernetes API-versioning guidance says built-in beta APIs are disabled by default, with a historical exception for beta APIs introduced before v1.22, so operators may explicitly enable them as needed.",
      "ko": "beta API는 test된 maturity level이지만 incompatible하게 변경될 수 있습니다. beta와 안정적인 version이 반드시 long-term compatible contract인 것은 아닙니다. 현재 Kubernetes API-versioning guidance에 따르면 내장 beta API는 기본로 disabled이며, v1.22 이전에 도입된 beta API에는 historical exception이 있으므로 필요할 때 운영자가 명시적으로 enable할 수 있습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/using-api/"
  },
  {
    "id": "local-143",
    "exam": "kcna",
    "domain": "Container Orchestration",
    "subtopic": "Resource metrics API · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What does metrics-server expose to Kubernetes clients?",
      "ko": "metrics-server는 Kubernetes client에 무엇을 expose합니까?"
    },
    "choices": {
      "en": [
        "Node and Pod resource metrics through the metrics.k8s.io Metrics API, used by kubectl top and autoscaling integrations",
        "Application logs through the core Kubernetes API",
        "Container images through a registry API",
        "NetworkPolicy decisions through the admission API"
      ],
      "ko": [
        "metrics.k8s.io Metrics API를 통한 node와 Pod resource 메트릭이며 kubectl top과 autoscaling 통합에서 사용됩니다",
        "core Kubernetes API를 통한 애플리케이션 log",
        "registry API를 통한 컨테이너 이미지",
        "admission API를 통한 NetworkPolicy decision"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "metrics-server collects resource usage from kubelets and exposes node and Pod metrics through the metrics.k8s.io API. Clients such as kubectl top and autoscaling integrations use this resource-metrics API; it is not the application log or image API.",
      "ko": "metrics-server는 kubelet에서 resource usage를 수집하고 metrics.k8s.io API를 통해 node와 Pod 메트릭을 expose합니다. kubectl top과 autoscaling 통합 같은 client가 이 resource-metrics API를 사용하며 application log나 image API가 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/debug/debug-cluster/resource-usage-monitoring/"
  },
  {
    "id": "local-145",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "API version naming · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which API version name follows Kubernetes API versioning conventions?",
      "ko": "다음 중 Kubernetes API versioning convention을 따르는 이름은 무엇입니까?"
    },
    "choices": {
      "en": [
        "apps/v1beta1",
        "apps/beta1",
        "apps/version1",
        "apps/v1-preview"
      ],
      "ko": [
        "apps/v1beta1",
        "apps/beta1",
        "apps/version1",
        "apps/v1-preview"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Kubernetes API versions use a group followed by a version such as apps/v1beta1; the version component uses v<major>alpha<stage> or v<major>beta<stage>, while stable versions use forms such as v1. The other strings do not follow that convention.",
      "ko": "Kubernetes API version은 group 뒤에 apps/v1beta1 같은 version을 사용합니다. version 부분은 v<major>alpha<stage> 또는 v<major>beta<stage> 형식이며 안정적인 version은 v1 같은 형식입니다. 나머지 문자열은 이 convention을 따르지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/using-api/"
  },
  {
    "id": "local-146",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Container logs · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which command retrieves logs from the previous terminated ruby container in Pod web-1?",
      "ko": "Pod web-1의 이전에 종료된 ruby 컨테이너 log를 가져오는 명령은 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl logs -p -c ruby web-1",
        "kubectl logs -f -c ruby web-1",
        "kubectl describe pod web-1 -c ruby",
        "kubectl get logs web-1 --previous-container ruby"
      ],
      "ko": [
        "kubectl logs -p -c ruby web-1",
        "kubectl logs -f -c ruby web-1",
        "kubectl describe pod web-1 -c ruby",
        "kubectl get logs web-1 --previous-container ruby"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "kubectl logs -p selects the previous terminated instance, and -c ruby selects the named container in the multi-container Pod. The -f option streams current logs, while describe and get logs are not the command forms for this request.",
      "ko": "kubectl logs -p는 이전에 종료된 instance를 선택하고 -c ruby는 multi-container Pod에서 이름이 ruby인 container를 선택합니다. -f는 현재 log를 stream하며 describe와 get logs는 이 요청에 맞는 명령 형식이 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_logs/"
  },
  {
    "id": "local-153",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "High availability topologies · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which layout best represents a highly available Kubernetes cluster using external etcd rather than stacked etcd?",
      "ko": "stacked etcd가 아닌 external etcd를 사용하는 고가용성 Kubernetes 클러스터 배치로 가장 적절한 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Three control-plane hosts plus three separate etcd hosts, for six hosts total",
        "One control-plane host plus one etcd host, with all other hosts used only for Pods",
        "Three control-plane hosts sharing one external etcd host as the only quorum configuration",
        "Three worker hosts with no etcd members because the API server stores all cluster status"
      ],
      "ko": [
        "3개의 제어-plane 호스트와 별도의 3개 etcd 호스트로 총 6개 호스트",
        "1개의 제어-plane 호스트와 1개의 etcd 호스트만 두고 나머지는 Pod 전용 호스트로 사용",
        "3개의 제어-plane 호스트가 quorum 구성원 하나뿐인 external etcd 호스트 하나를 공유",
        "3개의 worker 호스트만 두고 etcd 구성원은 두지 않음; API server가 모든 클러스터 상태를 저장"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "With external etcd, the etcd members run separately from the control-plane hosts. A common highly available layout uses three control-plane hosts and three etcd hosts, providing separate redundancy and an odd-sized etcd quorum; stacked etcd places an etcd member on each control-plane host instead.",
      "ko": "external etcd에서는 etcd member가 control-plane host와 분리되어 실행됩니다. 일반적인 고가용성 배치는 3개의 control-plane host와 3개의 etcd host를 사용하여 별도의 redundancy와 홀수 etcd quorum을 제공하며, stacked etcd는 각 control-plane host에 etcd member를 함께 배치합니다."
    },
    "ref": "https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/ha-topology/"
  },
  {
    "id": "local-154",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Scheduling · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes component assigns a newly created unscheduled Pod to a suitable node?",
      "ko": "새로 생성되어 아직 노드가 지정되지 않은 Pod를 적합한 노드에 배치하는 Kubernetes 구성 요소는 무엇입니까?"
    },
    "choices": {
      "en": [
        "kube-scheduler",
        "kubelet",
        "kube-proxy",
        "etcd"
      ],
      "ko": [
        "kube-scheduler",
        "kubelet",
        "kube-proxy",
        "etcd"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The kube-scheduler watches for Pods without a node assignment and selects a feasible node using resources, constraints, and scheduling policies. The kubelet runs Pods after assignment; kube-proxy handles Service networking, and etcd stores cluster status.",
      "ko": "kube-scheduler는 노드가 지정되지 않은 Pod를 감시하고 리소스, 제약 조건, 스케줄링 정책를 사용해 실행 가능한 노드를 선택합니다. kubelet은 배치 후 Pod를 실행하고, kube-proxy는 Service 네트워크를 처리하며, etcd는 클러스터 상태를 저장합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/"
  },
  {
    "id": "local-155",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "PersistentVolumeClaims · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What does a PersistentVolumeClaim primarily provide for a Pod?",
      "ko": "PersistentVolumeClaim은 Pod에 주로 무엇을 제공합니까?"
    },
    "choices": {
      "en": [
        "A request for persistent storage that can bind to a PersistentVolume or trigger dynamic provisioning",
        "The backing storage volume itself, with no claim object",
        "A StorageClass policy that provisions every volume automatically",
        "A scheduler rule that selects a node by label"
      ],
      "ko": [
        "PersistentVolume에 바인딩되거나 동적 프로비저닝을 요청하는 스토리지 claim",
        "claim 객체 없이 backing 스토리지 볼륨 자체",
        "모든 볼륨을 자동 provisioning하는 StorageClass 정책",
        "label로 노드를 선택하는 scheduler 규칙"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A PVC is a request for storage. It can bind to a matching PersistentVolume, while a StorageClass can provide a policy for dynamic provisioning; the PV is the backing volume and the scheduler is unrelated.",
      "ko": "PVC는 스토리지를 요청하는 객체입니다. 일치하는 PersistentVolume에 바인딩할 수 있고 StorageClass는 동적 프로비저닝 정책를 제공할 수 있습니다. PV는 backing 볼륨이며 scheduler와는 별개입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/storage/persistent-volumes/"
  },
  {
    "id": "local-156",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "etcd · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What role does etcd play in a Kubernetes cluster?",
      "ko": "Kubernetes 클러스터에서 etcd는 어떤 역할을 합니까?"
    },
    "choices": {
      "en": [
        "It persistently stores Kubernetes cluster status in a consistent distributed key-value store",
        "It schedules every Pod onto a node",
        "It runs the container processes on each node",
        "It exposes application metrics to HPA"
      ],
      "ko": [
        "일관된 분산 key-값 store에 Kubernetes 클러스터 상태를 지속적으로 저장합니다",
        "모든 Pod를 노드에 스케줄링합니다",
        "각 노드에서 컨테이너 프로세스를 실행합니다",
        "HPA에 애플리케이션 메트릭을 expose합니다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "etcd is the consistent, highly available key-value store used by Kubernetes for persistent API and cluster status. The scheduler, kubelet, and metrics adapters perform the other listed features.",
      "ko": "etcd는 Kubernetes가 API 및 클러스터 상태를 지속적으로 저장하는 데 사용하는 일관되고 highly 사용 가능한한 key-값 store입니다. 나머지 기능은 scheduler, kubelet, metrics adapter가 수행합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/architecture/#etcd"
  },
  {
    "id": "local-157",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Pod networking · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "How do containers in the same Pod normally communicate over the network?",
      "ko": "같은 Pod의 컨테이너들은 일반적으로 네트워크를 통해 어떻게 통신합니까?"
    },
    "choices": {
      "en": [
        "They share the Pod network namespace, IP address, and port space, so they can use localhost",
        "Each container receives an unrelated Pod IP and cannot use localhost",
        "They automatically share the host's network namespace",
        "They communicate only through an external LoadBalancer"
      ],
      "ko": [
        "Pod 네트워크 네임스페이스, IP address, port space를 공유하므로 localhost를 사용할 수 있습니다",
        "각 컨테이너가 서로 무관한 Pod IP를 받아 localhost를 사용할 수 없습니다",
        "자동으로 호스트의 네트워크 네임스페이스를 공유합니다",
        "외부 LoadBalancer를 통해서만 통신합니다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Containers in one Pod share the Pod network namespace and normally the Pod IP and port space. They can reach one different through localhost, although host networking is a separate optional configuration.",
      "ko": "하나의 Pod에 있는 컨테이너들은 Pod 네트워크 네임스페이스와 일반적으로 Pod IP 및 port space를 공유하므로 localhost로 서로 접근할 수 있습니다. 호스트 네트워크는 별도의 optional 구성입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/pods/#pod-networking"
  },
  {
    "id": "local-159",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Deployment and StatefulSet · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What do Deployments and StatefulSets have in common?",
      "ko": "Deployment와 StatefulSet의 공통점은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Both manage Pods from a declared Pod template",
        "Both guarantee stable ordinal identity and ordered rollout",
        "Both are node-level agents that run containers direct",
        "Both replace Services for network discovery"
      ],
      "ko": [
        "둘 다 선언된 Pod 템플릿으로부터 Pod를 관리합니다",
        "둘 다 안정적인 ordinal 식별자와 ordered rollout을 보장합니다",
        "둘 다 컨테이너를 직접 실행하는 노드-level agent입니다",
        "둘 다 네트워크 discovery를 위해 Service를 대체합니다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Both controllers manage Pods from a declared template, but StatefulSet additionally provides stable network identity and, when volumeClaimTemplates are used, persistent storage for each replica. These properties make StatefulSet useful for stateful databases; Deployment is generally for stateless replicas.",
      "ko": "두 controller 모두 선언된 Pod template으로 Pod를 관리하지만 StatefulSet은 stable network identity를 추가로 제공하고 volumeClaimTemplates를 사용하면 replica마다 persistent storage도 제공합니다. 따라서 stateful database에 유용하며 Deployment는 일반적으로 stateless replica용입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/controllers/"
  },
  {
    "id": "local-161",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Container image builds · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Why are multi-stage builds and minimal base images commonly used for container images?",
      "ko": "컨테이너 이미지에서 multi-stage 빌드와 최소한의 base 이미지를 사용하는 일반적인 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "They keep build tools and unnecessary packages out of the final runtime image",
        "They always include all intermediate build stages in the final runtime image",
        "They require every stage to use the same base image",
        "They remove all runtime dependency requirements from the application"
      ],
      "ko": [
        "최종 실행 이미지에서 빌드 도구와 불필요한 패키지를 제외합니다",
        "모든 중간 빌드 단계를 최종 실행 이미지에 항상 포함합니다",
        "모든 stage가 동일한 base image를 사용해야 합니다",
        "애플리케이션의 모든 실행 시 dependency 요구 사항을 제거합니다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Multi-stage builds can keep compilers and other build tools out of the final runtime image by copying only the needed artifacts into a later stage. This reduces image contents and attack surface, but it does not guarantee shorter builds or remove runtime dependencies.",
      "ko": "multi-stage build는 필요한 artifact만 이후 stage로 복사하여 compiler와 기타 빌드 도구를 최종 실행 이미지에서 제외할 수 있습니다. 따라서 이미지 내용과 attack surface를 줄일 수 있지만 빌드 시간이 짧아지거나 runtime dependency가 제거된다는 보장은 없습니다."
    },
    "ref": "https://docs.docker.com/build/building/multi-stage/"
  },
  {
    "id": "local-163",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "PromQL filtering · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which PromQL expression selects http_requests_total samples whose job label is apiserver?",
      "ko": "PromQL에서 job label이 apiserver인 http_requests_total sample을 선택하는 expression은 무엇입니까?"
    },
    "choices": {
      "en": [
        "http_requests_total{job=\"apiserver\"}",
        "http_requests_total WHERE job=\"apiserver\"",
        "http_requests_total(job=\"apiserver\")",
        "SELECT http_requests_total FROM job=\"apiserver\""
      ],
      "ko": [
        "http_requests_total{job=\"apiserver\"}",
        "http_requests_total WHERE job=\"apiserver\"",
        "http_requests_total(job=\"apiserver\")",
        "SELECT http_requests_total FROM job=\"apiserver\""
      ]
    },
    "answer": 0,
    "explain": {
      "en": "PromQL label selectors use braces and label matchers after the metric name. SQL WHERE syntax and function-call syntax are not PromQL selectors.",
      "ko": "PromQL label selector는 메트릭 name 뒤에 중괄호와 label matcher를 사용합니다. SQL WHERE 문법과 기능-call 문법은 PromQL selector가 아닙니다."
    },
    "ref": "https://prometheus.io/docs/prometheus/latest/querying/basics/"
  },
  {
    "id": "local-164",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Service types · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which list contains Kubernetes Service types, with headless Services treated correctly?",
      "ko": "headless Service를 올바르게 처리한 Kubernetes Service type 목록은 무엇입니까?"
    },
    "choices": {
      "en": [
        "ClusterIP, NodePort, LoadBalancer, and ExternalName",
        "ClusterIP, NodePort, LoadBalancer, ExternalName, and Headless",
        "PodIP, NodeIP, HostIP, and ExternalName",
        "Ingress, Gateway, Route, and ClusterIP"
      ],
      "ko": [
        "ClusterIP, NodePort, LoadBalancer, ExternalName",
        "ClusterIP, NodePort, LoadBalancer, ExternalName, Headless",
        "PodIP, NodeIP, HostIP, ExternalName",
        "Ingress, Gateway, 라우트, ClusterIP"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Kubernetes defines ClusterIP, NodePort, LoadBalancer, and ExternalName as primary Service types. A headless Service is a ClusterIP Service configured with clusterIP: None, not a fifth type.",
      "ko": "Kubernetes는 ClusterIP, NodePort, LoadBalancer, ExternalName을 기본 Service type으로 정의합니다. headless Service는 clusterIP: None으로 설정한 ClusterIP Service이며 다섯 번째 type이 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/service/"
  },
  {
    "id": "local-167",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "RBAC · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which Kubernetes authorization mode grants permissions through Roles or ClusterRoles and their bindings?",
      "ko": "Role 또는 ClusterRole과 바인딩을 통해 권한을 부여하는 Kubernetes authorization mode는 무엇입니까?"
    },
    "choices": {
      "en": [
        "RBAC",
        "Node authorization only",
        "Webhook authentication",
        "ABAC with no policy objects"
      ],
      "ko": [
        "RBAC",
        "Node authorization 만",
        "Webhook authentication",
        "ABAC with no 정책 객체"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "RBAC grants granular permissions to users, groups, and ServiceAccounts through Roles or ClusterRoles and RoleBindings or ClusterRoleBindings. Authentication and other authorization modes are separate concerns.",
      "ko": "RBAC는 Role 또는 ClusterRole과 RoleBinding 또는 ClusterRoleBinding을 통해 user, group, ServiceAccount에 세밀한 권한을 부여합니다. authentication과 다른 authorization mode는 별도 관심사입니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/rbac/"
  },
  {
    "id": "local-174",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Platform engineering · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is a typical responsibility of a platform engineer?",
      "ko": "Platform engineer의 일반적인 책임은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Building reusable self-service platforms and delivery automation for development teams",
        "Implementing business features for one application",
        "Setting product-market priorities and sales targets",
        "Performing financial audits of cloud spending"
      ],
      "ko": [
        "개발팀용 셀프서비스 플랫폼과 배포 자동화 구축",
        "개별 애플리케이션의 비즈니스 기능 구현",
        "제품의 시장 우선순위와 영업 목표 결정",
        "클라우드 지출에 대한 재무 감사 수행"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Platform engineers build and automate reusable infrastructure and delivery capabilities that help teams ship software. The role is broader than application coding and does not replace every organizational function.",
      "ko": "플랫폼 engineer는 개발 팀이 안전하게 software를 제공하도록 self-서비스 플랫폼과 infrastructure automation을 구축합니다. 애플리케이션 기능 전체나 다른 전문 팀의 역할을 모두 대체하지는 않습니다."
    },
    "ref": "https://tag-app-delivery.cncf.io/whitepapers/platforms"
  },
  {
    "id": "local-175",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "kubectl describe · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which kubectl command displays detailed information and events for an existing resource?",
      "ko": "기존 resource의 상세 정보와 event를 표시하는 kubectl command는 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubectl describe",
        "kubectl get --watch",
        "kubectl explain only",
        "kubectl label"
      ],
      "ko": [
        "kubectl describe",
        "kubectl get --watch",
        "kubectl explain만 사용",
        "kubectl label"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "kubectl describe retrieves detailed information about a named resource and commonly includes events. kubectl get lists resource data, explain documents fields, and label changes metadata.",
      "ko": "kubectl describe는 지정한 resource의 상세 정보와 일반적으로 event를 보여줍니다. kubectl get은 resource data를 나열하고 explain은 필드를 문서화하며 label은 metadata를 변경합니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_describe/"
  },
  {
    "id": "local-176",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Microservices · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which architectural goal is commonly associated with cloud-native microservices?",
      "ko": "cloud-native microservices와 일반적으로 연관된 architectural goal은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Independent service evolution with resilience to individual component failure",
        "One process and one database for every feature with no network calls",
        "A requirement that every service share one deployment artifact",
        "Eliminating all operational automation"
      ],
      "ko": [
        "개별 구성 요소 장애에 견디면서 서비스를 독립적으로 발전시키기",
        "모든 capability를 하나의 tightly coupled 프로세스와 데이터베이스로 구성",
        "모든 서비스가 하나의 릴리스 산출물를 공유해야 한다는 requirement",
        "automation을 피하고 서비스를 수동으로 운영"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Microservices split capabilities into independently deployable services and commonly seek resilience so one component failure does not take down the whole application. They add operational complexity and do not require one shared artifact.",
      "ko": "microservices는 capability를 독립적으로 배포할 수 있는 서비스로 나누고 한 구성 요소 장애가 전체를 중단하지 않도록 복원력를 추구합니다. 대신 운영 복잡성이 커지며 하나의 shared 산출물를 요구하지 않습니다."
    },
    "ref": "https://www.cncf.io/blog/2025/03/18/building-scalable-agile-and-secure-apis-with-kubernetes-and-microservices"
  },
  {
    "id": "local-177",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "kubectl create deployment · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What does kubectl create deployment nginx --image=nginx --replicas=2 request?",
      "ko": "kubectl create deployment nginx --image=nginx --replicas=2는 무엇을 요청합니까?"
    },
    "choices": {
      "en": [
        "Create a Deployment using nginx with a desired replica count of 2",
        "Create two standalone Pods without a Deployment controller",
        "Update an existing Deployment without changing its replica count",
        "Create a Deployment and expose it through a new Service"
      ],
      "ko": [
        "nginx를 사용하며 희망 복제 수가 2인 Deployment 생성",
        "Deployment 컨트롤러 없이 독립적인 Pod 두 개 생성",
        "복제 수 변경 없이 기존 Deployment 업데이트",
        "Deployment와 이를 노출하는 새 Service를 함께 생성"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The command requests a Deployment named nginx whose desired replica count is two and whose Pod template uses the nginx image. It does not request a Service, and the desired count is not an immediate guarantee that two Pods are ready.",
      "ko": "이 명령은 nginx image를 사용하는 Pod template과 희망 복제 수 2를 가진 nginx Deployment를 요청합니다. Service를 요청하지 않으며 두 Pod가 즉시 Ready가 된다는 보장은 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_create/kubectl_create_deployment/"
  },
  {
    "id": "local-179",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Service mesh scale · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which situation most strongly motivates adopting a service mesh?",
      "ko": "Service mesh 도입이 가장 필요한 상황은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Many services need consistent traffic policies, mTLS, and request-level telemetry",
        "A batch job needs more temporary disk space",
        "A team needs a repository for versioned container images",
        "A stateful application needs volume-backup retention rules"
      ],
      "ko": [
        "여러 서비스에 일관된 트래픽 정책, mTLS, 요청 단위 관측이 필요함",
        "배치 작업의 임시 디스크 공간을 늘려야 함",
        "버전별 컨테이너 이미지를 보관할 저장소가 필요함",
        "상태 저장 애플리케이션의 볼륨 백업 보존 규칙이 필요함"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A service mesh is most useful when many service-to-service communications need consistent traffic policy, mTLS, and request-level telemetry. It also adds operational overhead, so a simple batch job, image repository, or storage-retention rule alone does not justify it.",
      "ko": "여러 서비스 간 통신에 일관된 트래픽 정책, mTLS, 요청 단위 관측이 필요할 때 service mesh가 특히 유용합니다. 운영 overhead도 추가하므로 단순한 배치 작업, 이미지 저장소 또는 스토리지 보존 규칙만으로는 도입을 정당화하기 어렵습니다."
    },
    "ref": "https://istio.io/latest/about/service-mesh/"
  },
  {
    "id": "local-180",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Pod Disruption Budgets · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What can a PodDisruptionBudget limit during node maintenance?",
      "ko": "노드 유지보수 중 PodDisruptionBudget은 무엇을 제한할 수 있습니까?"
    },
    "choices": {
      "en": [
        "Eviction API requests that would violate the configured Pod availability budget",
        "Unexpected node failures",
        "Direct Pod deletions bypassing the Eviction API",
        "Pod replacements by Deployment rollout"
      ],
      "ko": [
        "설정된 Pod 가용성 budget을 위반하는 Eviction API 요청",
        "예상하지 못한 노드 장애",
        "Eviction API를 우회하는 직접 Pod 삭제",
        "Deployment rollout에 따른 Pod 교체"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A PodDisruptionBudget can limit voluntary disruptions by restricting Eviction API requests that would exceed the configured Pod availability budget. It does not prevent direct Pod deletion, Deployment rollouts, or involuntary node failures.",
      "ko": "PodDisruptionBudget은 설정된 Pod 가용성 budget을 초과하는 Eviction API 요청을 제한하여 voluntary disruption을 제어할 수 있습니다. 직접 Pod 삭제, Deployment rollout 또는 involuntary node failure를 막지는 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/pods/disruptions/"
  },
  {
    "id": "local-181",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "PV reclaim policy · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which PersistentVolume reclaim policy preserves storage for administrator action after claim deletion?",
      "ko": "claim 삭제 후 관리자가 조치할 수 있도록 스토리지를 보존하는 PersistentVolume reclaim 정책는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Retain",
        "Delete",
        "Recycle",
        "WaitForFirstConsumer"
      ],
      "ko": [
        "Retain",
        "Delete",
        "Recycle",
        "WaitForFirstConsumer"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Retain preserves the PersistentVolume and underlying storage for manual reclamation after the claim is released. Recycle is deprecated, Delete removes supported backing storage, and WaitForFirstConsumer is a volume-binding mode rather than a reclaim policy.",
      "ko": "Retain은 claim이 해제된 뒤 관리자가 수동으로 회수할 수 있도록 PersistentVolume과 기반 스토리지를 보존합니다. Recycle은 deprecated이며 Delete는 지원되는 기반 스토리지를 제거하고 WaitForFirstConsumer는 reclaim policy가 아니라 volume binding mode입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/storage/persistent-volumes/"
  },
  {
    "id": "local-183",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Falco · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What does Falco primarily monitor for runtime security?",
      "ko": "런타임 보안를 위해 Falco는 주로 무엇을 monitor합니까?"
    },
    "choices": {
      "en": [
        "Runtime system calls and events evaluated against security rules",
        "Known vulnerabilities discovered by container-image scanning",
        "API requests accepted or rejected by admission webhooks",
        "CPU and memory metrics collected for autoscaling"
      ],
      "ko": [
        "보안 규칙으로 평가하는 런타임 시스템 호출과 이벤트",
        "컨테이너 이미지 스캔으로 발견하는 알려진 취약점",
        "Admission webhook이 허용하거나 거부하는 API 요청",
        "자동 확장을 위해 수집하는 CPU·메모리 메트릭"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Falco observes runtime system calls and related events and applies rules to detect suspicious or anomalous activity. It is not merely an image registry scanner or resource parser.",
      "ko": "Falco는 런타임 시스템 call과 관련 이벤트를 관찰하고 규칙로 suspicious 활동를 탐지합니다. 빌드-time 이미지 scan, admission validation, metrics collection은 별도 기능입니다."
    },
    "ref": "https://falco.org/docs/"
  },
  {
    "id": "local-185",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Cloud cost optimization · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Why can cost optimization be complex in cloud-native environments?",
      "ko": "cloud-native 환경에서 비용 최적화가 복잡할 수 있는 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Distributed services, variable pricing, scaling, instance choices, and network egress interact",
        "All providers use one fixed price for every resource",
        "Only container image size affects total cost",
        "Kubernetes removes the need for cost allocation"
      ],
      "ko": [
        "분산 서비스, variable pricing, scaling, instance choice, 네트워크 egress가 상호작용하기 때문",
        "모든 provider가 모든 리소스에 하나의 fixed price를 사용하기 때문",
        "컨테이너 이미지 size만 total cost에 영향을 주기 때문",
        "Kubernetes가 cost allocation 필요를 제거하기 때문"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Cloud-native costs span many services and providers with different pricing, scaling behavior, instance types, and egress charges. Cost optimization therefore needs visibility and allocation rather than one universal rule.",
      "ko": "cloud-native 비용은 서로 다른 pricing, scaling behavior, instance type, egress charge를 가진 여러 서비스와 provider에 걸칩니다. 따라서 하나의 universal 규칙이 아니라 visibility와 allocation이 필요합니다."
    },
    "ref": "https://www.finops.org/framework/"
  },
  {
    "id": "local-186",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Kubernetes hierarchy · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which hierarchy best describes Kubernetes workload placement?",
      "ko": "Kubernetes 워크로드 placement hierarchy로 가장 적절한 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Nodes belong to a cluster; each Pod runs on one node and groups one or more containers",
        "One Pod's containers are scheduled independently across several nodes",
        "Every container is assigned its own Kubernetes node",
        "A Service owns the nodes on which its selected Pods run"
      ],
      "ko": [
        "클러스터는 노드로 구성되며 각 Pod는 한 노드에서 하나 이상의 컨테이너를 묶어 실행",
        "한 Pod의 컨테이너를 여러 노드에 독립적으로 스케줄링",
        "컨테이너마다 전용 Kubernetes 노드를 할당",
        "Service가 선택한 Pod를 실행하는 노드들을 소유"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Kubernetes workload hierarchy places nodes in a cluster, runs each Pod on one node, and groups one or more containers in a Pod. Containers in one Pod are co-located rather than independently scheduled across nodes.",
      "ko": "Kubernetes workload hierarchy에서 노드는 클러스터에 속하고 각 Pod는 하나의 노드에서 실행되며 하나 이상의 컨테이너를 묶습니다. 한 Pod의 컨테이너는 노드마다 독립적으로 스케줄링되지 않고 함께 배치됩니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/components/"
  },
  {
    "id": "local-189",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Metrics · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which observability signal is best suited to plotting resource consumption over time?",
      "ko": "시간에 따른 리소스 consumption을 plot하는 데 가장 적합한 관측성 signal은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Metrics",
        "Logs",
        "Traces",
        "Events"
      ],
      "ko": [
        "메트릭",
        "로그",
        "트레이스",
        "이벤트"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Metrics are numeric time-series observations useful for plotting resource usage over time. Logs are event records, traces represent request flows across components, and events record discrete state changes.",
      "ko": "메트릭은 시간에 따른 리소스 사용량을 그래프로 나타내기 좋은 숫자 시계열 관측값입니다. 로그는 이벤트 기록이고 트레이스는 구성 요소 사이의 요청 흐름을 나타내며 이벤트는 개별 상태 변화를 기록합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/cluster-administration/monitoring/"
  },
  {
    "id": "local-192",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Linkerd service mesh · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which capability is associated with Linkerd as a service mesh?",
      "ko": "서비스 mesh인 Linkerd와 연관된 capability는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Managing service-to-service traffic, policy, and telemetry without requiring application-code changes",
        "Replacing the Kubernetes API server and storing all cluster status",
        "Assigning every Pod to a node as the cluster scheduler",
        "Building and distributing container images as a registry"
      ],
      "ko": [
        "애플리케이션 code 변경 없이 서비스 간 트래픽, 정책, telemetry를 관리",
        "Kubernetes API server를 대체하고 모든 클러스터 상태를 저장",
        "클러스터 scheduler로서 모든 Pod를 노드에 할당",
        "registry로서 컨테이너 이미지를 빌드하고 배포"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Linkerd is a service mesh that provides service-to-service traffic management, policy enforcement, and telemetry. It operates alongside workload and does not replace the API server, scheduler, or image registry.",
      "ko": "Linkerd는 서비스 간 트래픽 관리, 정책 enforcement, telemetry를 제공하는 서비스 mesh입니다. 워크로드와 함께 동작하며 API server, scheduler, 이미지 registry를 대체하지 않습니다."
    },
    "ref": "https://linkerd.io/2.16/overview/"
  },
  {
    "id": "local-193",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Ephemeral containers · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "ko": "ephemeral 컨테이너의 주된 목적은 무엇입니까?",
      "en": "What is the primary purpose of an ephemeral container?"
    },
    "choices": {
      "en": [
        "A temporary debug container added to an existing Pod",
        "A new Pod scheduled onto a separate node",
        "A replacement for the Pod’s regular application container",
        "A sidecar that remains after the Pod is deleted"
      ],
      "ko": [
        "기존 Pod에 임시로 추가하는 디버그 컨테이너",
        "별도 노드에 스케줄되는 새 Pod",
        "Pod의 일반 애플리케이션 컨테이너를 대체하는 구성",
        "Pod 삭제 후에도 남는 sidecar"
      ]
    },
    "answer": 0,
    "explain": {
      "ko": "ephemeral 컨테이너는 문제 해결을 위해 기존 Pod에 임시로 추가되며 Pod의 일반 컨테이너를 대체하거나 영구적인 스토리지를 제공하지 않습니다.",
      "en": "An ephemeral container is added temporarily to an existing Pod for troubleshooting and does not replace the Pod's normal containers or provide persistent storage."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/pods/ephemeral-containers/"
  },
  {
    "id": "local-194",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Cloud-native design · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "ko": "cloud-native 애플리케이션을 가장 잘 설명하는 것은 무엇입니까?",
      "en": "Which statement best describes a cloud-native application?"
    },
    "choices": {
      "ko": [
        "cloud scalability, 복원력, automation, dynamic 서비스를 활용하도록 설계됨",
        "어떤 cloud VM에서 실행되기만 하면 cloud-native임",
        "automation과 분산 서비스를 피해야 함",
        "컨테이너 이미지 형식만으로 정의됨"
      ],
      "en": [
        "It is designed to use cloud scalability, resilience, automation, and dynamic services",
        "It is cloud-native merely because it runs on any cloud VM",
        "It must avoid automation and distributed services",
        "It is defined only by its container image format"
      ]
    },
    "answer": 0,
    "explain": {
      "ko": "cloud-native 설계는 elasticity, 복원력, automation, dynamic 관리되는 서비스 같은 cloud capability를 활용하며, 변경 없는 워크로드를 cloud에서 실행하는 것만으로 충분하지 않습니다.",
      "en": "Cloud-native design uses cloud capabilities such as elasticity, resilience, automation, and dynamic managed services; simply running an unchanged workload on a cloud is not sufficient."
    },
    "ref": "https://github.com/cncf/toc/blob/main/DEFINITION.md"
  },
  {
    "id": "local-195",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "CNCF governance · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which approach conflicts with open community governance?",
      "ko": "어떤 접근 방식이 개방형 커뮤니티 거버넌스에 어긋납니까?"
    },
    "choices": {
      "en": [
        "Making unilateral private decisions without contributor input",
        "Open discussion followed by transparent consensus or a vote",
        "Documented proposals reviewed by maintainers and working groups",
        "Published decisions with a clear contributor feedback process"
      ],
      "ko": [
        "기여자 의견 없이 비공개적으로 일방적인 결정을 내림",
        "공개 토론 후 합의 또는 투표를 진행함",
        "문서화된 제안을 검토함",
        "피드백 절차를 거쳐 결정을 공개함"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Making unilateral private decisions without contributor input conflicts with open community governance. Discussion, documented proposals, review, and transparent consensus or voting are compatible governance practices.",
      "ko": "기여자 의견 없이 비공개적으로 일방적인 결정을 내리는 것은 개방형 커뮤니티 거버넌스에 어긋납니다. 공개 토론, 합의 또는 투표, 문서화된 제안 검토, 피드백을 반영한 결정 공개는 개방형 거버넌스에 부합합니다."
    },
    "ref": "https://www.cncf.io/about/who-we-are/"
  },
  {
    "id": "local-196",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Garbage collection · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "ko": "객체가 eligible해지면 Kubernetes garbage collection은 무엇을 제거합니까?",
      "en": "What does Kubernetes garbage collection remove when objects become eligible?"
    },
    "choices": {
      "en": [
        "Eligible API objects such as terminated Pods, completed Jobs, and dependents with missing owners",
        "API objects still referenced by a live owner",
        "Running Pods that are still part of an active workload",
        "Container-runtime images and logs on a node"
      ],
      "ko": [
        "종료된 Pod, 완료된 Job, 소유자가 없는 dependent 같은 eligible API 객체",
        "실행 중인 소유자가 여전히 참조하는 API 객체",
        "활성 워크로드에 속한 실행 중인 Pod",
        "노드의 컨테이너-런타임 이미지와 log"
      ]
    },
    "answer": 0,
    "explain": {
      "ko": "Kubernetes garbage collection은 ownership과 lifecycle 규칙에 따라 eligible API 객체와 dependent를 제거합니다. kubelet은 노드-level 컨테이너와 이미지 garbage collection을 별도로 처리합니다.",
      "en": "Kubernetes garbage collection removes eligible API objects and dependents according to ownership and lifecycle rules. Kubelet separately handles node-level container and image garbage collection."
    },
    "ref": "https://kubernetes.io/docs/concepts/architecture/garbage-collection/"
  },
  {
    "id": "local-197",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Node eviction · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "For an ordinary non-DaemonSet Pod, what default NoExecute toleration period applies after a node is NotReady or unreachable?",
      "ko": "일반적인 non-DaemonSet Pod에서 노드가 NotReady 또는 unreachable 상태가 된 뒤 기본 NoExecute toleration 기간은 얼마입니까?"
    },
    "choices": {
      "en": [
        "300 seconds",
        "30 seconds",
        "0 seconds",
        "Indefinitely"
      ],
      "ko": [
        "300초",
        "30초",
        "0초",
        "무기한"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The standard default NoExecute tolerations for not-ready and unreachable taints are 300 seconds for an ordinary Pod. This is not an exact timer that starts at the first missed heartbeat, and not every modern taint-eviction path should be attributed to the node controller.",
      "ko": "일반적인 Pod에 적용되는 not-ready 및 unreachable taint의 표준 기본 NoExecute toleration은 300초입니다. 첫 heartbeat 누락 순간부터 정확히 시작하는 타이머라는 뜻은 아니며, 모든 최신 taint 기반 eviction 경로를 node controller의 동작으로 설명해서도 안 됩니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/architecture/nodes/"
  },
  {
    "id": "local-198",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Vertical Pod Autoscaler · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "ko": "replica 수가 아니라 Pod 리소스 요청와 limit을 조정하는 Kubernetes 구성 요소는 무엇입니까?",
      "en": "Which Kubernetes component adjusts Pod resource requests and limits rather than replica count?"
    },
    "choices": {
      "ko": [
        "Vertical Pod Autoscaler",
        "HorizontalPodAutoscaler",
        "Cluster Autoscaler",
        "KEDA만 사용"
      ],
      "en": [
        "Vertical Pod Autoscaler",
        "HorizontalPodAutoscaler",
        "Cluster Autoscaler",
        "KEDA only"
      ]
    },
    "answer": 0,
    "explain": {
      "ko": "VPA는 Pod의 리소스 요청와 limit을 조정하고 HPA는 replica 수, Cluster Autoscaler는 노드 수를 변경합니다.",
      "en": "VPA adjusts resource requests and limits for Pods, while HPA changes replica count and Cluster Autoscaler changes node count."
    },
    "ref": "https://github.com/kubernetes/autoscaler/tree/master/vertical-pod-autoscaler"
  },
  {
    "id": "local-199",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Privilege escalation · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "ko": "프로세스가 parent보다 더 많은 privilege를 얻지 못하게 하는 Pod 보안 setting은 무엇입니까?",
      "en": "Which Pod security setting prevents a process from gaining more privileges than its parent?"
    },
    "choices": {
      "ko": [
        "allowPrivilegeEscalation: false",
        "hostNetwork: true",
        "privileged: true",
        "serviceAccountName: 기본"
      ],
      "en": [
        "allowPrivilegeEscalation: false",
        "hostNetwork: true",
        "privileged: true",
        "serviceAccountName: default"
      ]
    },
    "answer": 0,
    "explain": {
      "ko": "allowPrivilegeEscalation을 false로 설정하면 no_new_privs 동작이 활성화되어 프로세스가 parent보다 더 많은 privilege를 얻지 못합니다. 호스트 networking과 식별자 setting과는 다릅니다.",
      "en": "Setting allowPrivilegeEscalation to false enables no_new_privs behavior so a process cannot gain more privilege than its parent. It is distinct from host networking and identity settings."
    },
    "ref": "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/"
  },
  {
    "id": "local-200",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Envoy proxy · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "ko": "cloud-native 시스템에서 Envoy는 일반적으로 무엇에 사용됩니까?",
      "en": "What is Envoy commonly used for in cloud-native systems?"
    },
    "choices": {
      "en": [
        "A high-performance edge or service proxy for routing, load balancing, retries, telemetry, and mTLS",
        "An Istio control-plane component that stores Kubernetes objects",
        "A DNS server that resolves Service names",
        "A node agent that starts containers"
      ],
      "ko": [
        "routing, load balancing, retry, telemetry, mTLS를 위한 high-performance edge 또는 서비스 proxy",
        "Kubernetes 객체를 저장하는 Istio 제어-plane 구성 요소",
        "Service name을 resolve하는 DNS server",
        "컨테이너를 시작하는 노드 agent"
      ]
    },
    "answer": 0,
    "explain": {
      "ko": "Envoy는 edge 또는 서비스-mesh data plane에서 routing, load balancing, retry, 관측성, mTLS에 사용하는 high-performance proxy입니다.",
      "en": "Envoy is a high-performance proxy used at the edge or in a service-mesh data plane for routing, load balancing, retries, observability, and mTLS."
    },
    "ref": "https://www.envoyproxy.io/docs/envoy/latest/intro/what_is_envoy"
  },
  {
    "id": "local-201",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Flux GitOps Toolkit · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "ko": "Flux GitOps Toolkit이란 무엇입니까?",
      "en": "What is the Flux GitOps Toolkit?"
    },
    "choices": {
      "en": [
        "A set of Kubernetes-native controllers for sources, Helm, Kustomize, images, and reconciliation",
        "An Argo CD Application resource for one cluster only",
        "A Helm chart containing one application’s templates",
        "A kube-scheduler extension for node scoring"
      ],
      "ko": [
        "소스, Helm, Kustomize, 이미지, reconciliation을 위한 Kubernetes-native controller 집합",
        "하나의 클러스터만을 위한 Argo CD Application 리소스",
        "하나의 애플리케이션 템플릿를 담은 Helm chart",
        "노드 scoring을 위한 kube-scheduler extension"
      ]
    },
    "answer": 0,
    "explain": {
      "ko": "Flux는 소스 synchronization, Helm과 Kustomize delivery, 이미지 update, reconciliation을 자동화하는 Kubernetes-native controller로 구성됩니다.",
      "en": "Flux is built from Kubernetes-native controllers that automate source synchronization, Helm and Kustomize delivery, image updates, and reconciliation."
    },
    "ref": "https://fluxcd.io/flux/components/"
  },
  {
    "id": "local-202",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Deployment image update · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "ko": "기존 Deployment 이미지를 update하고 rollout을 시작하는 명령는 무엇입니까?",
      "en": "Which command updates an existing Deployment image and starts a rollout?"
    },
    "choices": {
      "ko": [
        "kubectl set image deployment/my-app my-container=my-app:v2",
        "kubectl get deployment my-app",
        "kubectl describe deployment my-app",
        "kubectl label deployment my-app image=v2"
      ],
      "en": [
        "kubectl set image deployment/my-app my-container=my-app:v2",
        "kubectl get deployment my-app",
        "kubectl describe deployment my-app",
        "kubectl label deployment my-app image=v2"
      ]
    },
    "answer": 0,
    "explain": {
      "ko": "kubectl set image는 Deployment Pod 템플릿의 container image를 변경하고 Deployment 객체를 교체하지 않은 채 새 rollout을 시작합니다.",
      "en": "kubectl set image changes the container image in the Deployment Pod template and triggers a new rollout without replacing the Deployment object."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_set/kubectl_set_image/"
  },
  {
    "id": "local-203",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "ConfigMap and Secret · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "ko": "ConfigMap과 Secret을 구분하는 설명은 무엇입니까?",
      "en": "Which statement distinguishes ConfigMaps from Secrets?"
    },
    "choices": {
      "en": [
        "ConfigMap stores non-confidential configuration; Secret is intended for confidential values",
        "ConfigMap is encrypted at rest by default; Secret is plain text",
        "ConfigMap and Secret are interchangeable storage volumes",
        "Secret is only for node labels and ConfigMap is only for images"
      ],
      "ko": [
        "ConfigMap은 non-confidential 구성을 저장하고 Secret은 confidential 값용입니다",
        "ConfigMap은 기본적으로 at-rest encryption되고 Secret은 plain text입니다",
        "ConfigMap과 Secret은 서로 대체 가능한 스토리지 볼륨입니다",
        "Secret은 노드 label만, ConfigMap은 이미지만을 위한 것입니다"
      ]
    },
    "answer": 0,
    "explain": {
      "ko": "ConfigMap은 non-confidential 구성을 저장하고 Secret은 sensitive 값용이며 적절한 access 제어과 encryption 구성이 필요합니다.",
      "en": "ConfigMaps hold non-confidential configuration data, while Secrets are intended for sensitive values and require appropriate access control and encryption configuration."
    },
    "ref": "https://kubernetes.io/docs/concepts/configuration/configmap/"
  },
  {
    "id": "local-204",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Pod Security Standards · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "ko": "least restrictive에서 most restrictive까지 Kubernetes Pod Security Standard 순서는 무엇입니까?",
      "en": "What is the ordering of Kubernetes Pod Security Standards from least to most restrictive?"
    },
    "choices": {
      "ko": [
        "Privileged, Baseline, Restricted",
        "Restricted, Baseline, Privileged",
        "Baseline, Privileged, Restricted",
        "Privileged, Restricted, Baseline"
      ],
      "en": [
        "Privileged, Baseline, Restricted",
        "Restricted, Baseline, Privileged",
        "Baseline, Privileged, Restricted",
        "Privileged, Restricted, Baseline"
      ]
    },
    "answer": 0,
    "explain": {
      "ko": "Privileged는 제한이 없고 Baseline은 일반적인 privilege escalation을 방지하며 Restricted는 가장 강한 safeguard를 적용합니다.",
      "en": "Privileged is unrestricted, Baseline prevents common privilege escalations, and Restricted applies the strongest standard safeguards."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/pod-security-standards/"
  },
  {
    "id": "local-205",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Gateway API · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which Gateway API resources separate infrastructure and application routing roles?",
      "ko": "어떤 Gateway API 리소스가 인프라와 애플리케이션의 라우팅 역할을 분리합니까?"
    },
    "choices": {
      "ko": [
        "GatewayClass, Gateway, HTTPRoute",
        "Pod, Node, Container",
        "Role, RoleBinding, Secret",
        "PV, PVC, StorageClass"
      ],
      "en": [
        "GatewayClass, Gateway, and HTTPRoute",
        "Pod, Node, and Container",
        "Role, RoleBinding, and Secret",
        "PV, PVC, and StorageClass"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Gateway API extends the Ingress model with role-oriented GatewayClass, Gateway, and HTTPRoute resources. It supports HTTP and TLS routing when the selected controller implements those features and provides conformance; the resource model alone does not guarantee every implementation feature.",
      "ko": "Gateway API는 역할-oriented GatewayClass, Gateway, HTTPRoute 리소스로 Ingress model을 확장합니다. 선택한 controller가 해당 기능을 구현하고 conformance를 제공할 때 HTTP와 TLS routing을 지원하며, 리소스 model만으로 모든 implementation 기능이 보장되지는 않습니다."
    },
    "ref": "https://gateway-api.sigs.k8s.io/docs/concepts/api-overview/"
  },
  {
    "id": "local-207",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Deployment patch · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "ko": "kubectl patch를 위한 Deployment container image는 어디에 nested됩니까?",
      "en": "Where is a Deployment container image nested for a kubectl patch?"
    },
    "choices": {
      "ko": [
        "spec.템플릿.spec.containers",
        "metadata.labels",
        "상태.조건",
        "spec.selector.matchLabels만"
      ],
      "en": [
        "spec.template.spec.containers",
        "metadata.labels",
        "status.conditions",
        "spec.selector.matchLabels only"
      ]
    },
    "answer": 0,
    "explain": {
      "ko": "Deployment Pod 템플릿의 컨테이너 이미지는 spec.템플릿.spec.containers 아래에 있으며 해당 필드를 patch하면 템플릿이 update되고 rollout이 시작됩니다.",
      "en": "A Deployment Pod template stores container images under spec.template.spec.containers; patching that field updates the template and triggers a rollout."
    },
    "ref": "https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"
  },
  {
    "id": "local-208",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "ServiceAccount RBAC · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "ko": "애플리케이션이 자체 Kubernetes API 식별자와 권한을 받게 하려면 어떻게 해야 합니까?",
      "en": "How should an application receive its own Kubernetes API identity and permissions?"
    },
    "choices": {
      "ko": [
        "전용 ServiceAccount를 만들고 적절한 RBAC를 바인딩한 뒤 Pod에 assign",
        "모든 워크로드에 바인딩 없는 기본 account 사용",
        "이미지에 API token 저장",
        "Service type을 식별자로 사용"
      ],
      "en": [
        "Create a dedicated ServiceAccount, bind appropriate RBAC, and assign it to the Pod",
        "Use the default account without bindings for every workload",
        "Put an API token in the image",
        "Use a Service type as the identity"
      ]
    },
    "answer": 0,
    "explain": {
      "ko": "전용 ServiceAccount를 만들고 Role 또는 ClusterRole 바인딩으로 필요한 권한만 부여한 뒤 Pod의 spec.serviceAccountName을 설정합니다.",
      "en": "Create a dedicated ServiceAccount, grant only needed permissions with Role or ClusterRole bindings, and set spec.serviceAccountName on the Pod."
    },
    "ref": "https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/"
  },
  {
    "id": "local-209",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Scheduler filtering and scoring · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "ko": "kube-scheduler는 Pod의 노드를 선택할 때 어떤 phase를 사용합니까?",
      "en": "Which phases does kube-scheduler use to choose among nodes for a Pod?"
    },
    "choices": {
      "en": [
        "Filtering infeasible nodes, then scoring feasible candidates",
        "Scoring every node before checking whether it can run the Pod",
        "Binding the Pod before any scheduling plugins run",
        "Letting the kubelet choose a node after the scheduler exits"
      ],
      "ko": [
        "실행할 수 없는 노드를 filtering한 뒤 가능한 후보를 scoring",
        "실행 가능 여부 확인 전에 모든 노드를 scoring",
        "스케줄링 plugin 실행 전에 Pod를 바인딩",
        "scheduler가 종료된 뒤 kubelet이 노드를 선택"
      ]
    },
    "answer": 0,
    "explain": {
      "ko": "scheduler는 먼저 Pod를 만족할 수 없는 노드를 filter한 뒤 실행 가능한 후보를 score하고 스케줄링 cycle을 통해 노드를 선택합니다.",
      "en": "The scheduler first filters nodes that cannot satisfy the Pod, then scores feasible candidates and selects a node through the scheduling cycle."
    },
    "ref": "https://kubernetes.io/docs/concepts/scheduling-eviction/scheduling-framework/"
  },
  {
    "id": "local-210",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Image pinning · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "ko": "어떤 컨테이너 이미지 practice가 reproducibility를 높이고 supply-chain drift를 줄입니까?",
      "en": "Which container-image practice improves reproducibility and reduces supply-chain drift?"
    },
    "choices": {
      "ko": [
        "최소한의 신뢰할 수 있는 이미지을 사용하고 base 이미지를 immutable digest로 pin",
        "모든 빌드에 unqualified latest tag 사용",
        "모든 빌드 tool을 런타임 이미지에 포함",
        "모든 restart마다 base 이미지 변경"
      ],
      "en": [
        "Use minimal trusted images and pin the base image by immutable digest",
        "Use an unqualified latest tag for every build",
        "Include all build tools in the runtime image",
        "Change the base image on every restart"
      ]
    },
    "answer": 0,
    "explain": {
      "ko": "최소한의 신뢰할 수 있는 이미지은 불필요한 attack surface를 줄이고 immutable digest는 정확한 base content를 고정해 mutable tag drift를 방지합니다.",
      "en": "Minimal trusted images reduce unnecessary attack surface, while an immutable digest pins the exact base content and avoids mutable-tag drift."
    },
    "ref": "https://docs.docker.com/build/building/best-practices/"
  },
  {
    "id": "local-211",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "IngressClass · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "ko": "Ingress 리소스에서 ingressClassName은 무엇을 식별합니까?",
      "en": "What does ingressClassName identify on an Ingress resource?"
    },
    "choices": {
      "ko": [
        "규칙을 구현할 IngressClass와 controller",
        "Service 백엔드 port만",
        "Pod 보안 standard",
        "컨테이너 런타임 socket"
      ],
      "en": [
        "The IngressClass and controller responsible for implementing its rules",
        "The Service backend port only",
        "The Pod security standard",
        "The container runtime socket"
      ]
    },
    "answer": 0,
    "explain": {
      "ko": "ingressClassName은 Ingress 규칙과 구성을 구현할 IngressClass의 controller를 선택합니다.",
      "en": "ingressClassName selects the IngressClass whose controller implements the Ingress rules and configuration."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/ingress/"
  },
  {
    "id": "local-212",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "Helm uninstall · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "ko": "mysql-1234라는 Helm 릴리스를 제거하는 명령는 무엇입니까?",
      "en": "Which command removes the Helm release named mysql-1234?"
    },
    "choices": {
      "en": [
        "helm uninstall mysql-1234",
        "helm rollback mysql-1234",
        "helm upgrade mysql-1234",
        "helm list mysql-1234"
      ],
      "ko": [
        "helm uninstall mysql-1234",
        "helm rollback mysql-1234",
        "helm upgrade mysql-1234",
        "helm list mysql-1234"
      ]
    },
    "answer": 0,
    "explain": {
      "ko": "helm uninstall은 현재 Helm terminology로 지정한 Helm 릴리스를 제거하며 이미지나 전체 클러스터를 삭제하지 않습니다.",
      "en": "helm uninstall removes the named Helm release using current Helm terminology; it does not delete an image or an entire cluster."
    },
    "ref": "https://helm.sh/docs/helm/helm_uninstall/"
  },
  {
    "id": "local-213",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Open-source collaboration · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "ko": "open-소스 cloud-native 프로젝트의 collaboration과 sustainability를 무엇이 지원합니까?",
      "en": "What supports collaboration and sustainability in open-source cloud-native projects?"
    },
    "choices": {
      "ko": [
        "community 이벤트, working group, 기여자 engagement, stewardship",
        "하나의 closed vendor가 모든 decision을 통제",
        "프라이빗 소스 code만",
        "거버넌스와 기여자 프로세스 없음"
      ],
      "en": [
        "Community events, working groups, contributor engagement, and stewardship",
        "A single closed vendor controlling every decision",
        "Only private source code",
        "No governance or contributor process"
      ]
    },
    "answer": 0,
    "explain": {
      "ko": "open-소스 프로젝트는 지속 가능한 collaboration을 위해 community 참여, 이벤트, working group, 기여자 프로세스, 책임 있는 stewardship에 의존합니다.",
      "en": "Open-source projects depend on community participation, events, working groups, contributor processes, and responsible stewardship for sustainable collaboration."
    },
    "ref": "https://www.cncf.io/about/who-we-are/"
  },
  {
    "id": "local-214",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Limit request defaulting · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "ko": "Kubernetes는 언제 resource limit을 resource request로 사용합니까?",
      "en": "When is a resource limit used as a request by Kubernetes?"
    },
    "choices": {
      "ko": [
        "요청가 없고 admission/기본 요청도 이미 제공하지 않은 경우",
        "explicit 요청가 있어도 limit이 있으면 항상",
        "Pod가 pending일 때만",
        "클러스터-scoped 객체에만"
      ],
      "en": [
        "When no request is specified and no admission/default request has already supplied one",
        "Whenever any limit is present, even with an explicit request",
        "Only when the Pod is pending",
        "Only for cluster-scoped objects"
      ]
    },
    "answer": 0,
    "explain": {
      "ko": "container에 limit은 있지만 request가 없고 admission controller나 namespace default request도 제공하지 않으면 Kubernetes는 limit을 request로 사용할 수 있습니다. 명시된 request나 default request가 우선합니다.",
      "en": "If a container has a limit but no request, and no admission controller or namespace default request supplies one, Kubernetes can use the limit as the request. Explicit or defaulted requests take precedence."
    },
    "ref": "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/"
  },
  {
    "id": "local-215",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Workload and static Pods · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "ko": "워크로드-관리되는 Pod와 static Pod를 구분하는 설명은 무엇입니까?",
      "en": "Which statement distinguishes workload-managed Pods from static Pods?"
    },
    "choices": {
      "en": [
        "Deployments create/manage Pods through controllers, while static Pods are managed directly by kubelet from local manifests",
        "A Deployment creates static Pods from a local manifest on every node",
        "The API server stores static Pods as Services before kubelet runs them",
        "A DaemonSet and a static Pod are identical controller-managed objects"
      ],
      "ko": [
        "Deployment는 controller로 Pod를 관리하고 static Pod는 kubelet이 로컬 매니페스트로 직접 관리",
        "Deployment가 모든 노드의 로컬 매니페스트에서 static Pod를 생성",
        "API server가 static Pod를 Service로 저장한 뒤 kubelet이 실행",
        "DaemonSet과 static Pod가 동일한 controller-관리되는 객체"
      ]
    },
    "answer": 0,
    "explain": {
      "ko": "Deployment 같은 워크로드 controller는 Pod를 생성하고 교체하며 kubelet은 로컬 매니페스트로 정의된 static Pod를 관리합니다. Pod 자체는 대체로 immutable합니다.",
      "en": "Workload controllers such as Deployments create and replace Pods, while kubelet manages static Pods defined in its local manifest path. Pods themselves are otherwise largely immutable."
    },
    "ref": "https://kubernetes.io/docs/tasks/configure-pod-container/static-pod/"
  },
  {
    "id": "local-216",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "kubectl run · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "ko": "kubectl run my-app --image=nginx는 무엇을 요청합니까?",
      "en": "What does kubectl run my-app --image=nginx request?"
    },
    "choices": {
      "ko": [
        "nginx 이미지를 사용하는 my-app이라는 Pod 생성",
        "5 replica Deployment 생성",
        "Service와 Ingress pair 생성",
        "PersistentVolume 생성"
      ],
      "en": [
        "Create a Pod named my-app using the nginx image",
        "Create a Deployment with five replicas",
        "Create a Service and Ingress pair",
        "Create a PersistentVolume"
      ]
    },
    "answer": 0,
    "explain": {
      "ko": "kubectl run my-app --image=nginx는 nginx image를 사용하는 my-app이라는 Pod를 생성합니다. Deployment나 Service를 생성하지는 않습니다.",
      "en": "kubectl run my-app --image=nginx creates a Pod named my-app using the nginx image. It does not create a Deployment or Service."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_run/"
  },
  {
    "id": "local-217",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "kubectl port-forward · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "ko": "kubectl port-forward는 무엇을 제공합니까?",
      "en": "What does kubectl port-forward provide?"
    },
    "choices": {
      "ko": [
        "access와 troubleshooting을 위한 Pod 또는 Service port로의 로컬 connection",
        "자동 퍼블릭 cloud LoadBalancer",
        "영구적인 Ingress 라우트",
        "컨테이너 런타임 대체물"
      ],
      "en": [
        "A local connection to a Pod or Service port for access and troubleshooting",
        "A public cloud LoadBalancer automatically",
        "A permanent Ingress route",
        "A replacement container runtime"
      ]
    },
    "answer": 0,
    "explain": {
      "ko": "kubectl port-forward는 일반적으로 development와 문제 해결을 위해 local port를 Pod 또는 Service port로 전달하며 영구 public 라우트를 만들지 않습니다.",
      "en": "kubectl port-forward forwards a local port to a Pod or Service port, commonly for development and troubleshooting; it does not create a permanent public route."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_port-forward/"
  },
  {
    "id": "local-219",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "Helm values · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "ko": "Helm chart에서 values.yaml의 역할은 무엇입니까?",
      "en": "What is the role of values.yaml in a Helm chart?"
    },
    "choices": {
      "en": [
        "It defines default chart configuration values that users can override",
        "It defines the chart metadata and version in Chart.yaml",
        "It contains the rendered resources of the last release",
        "It is the client socket used by the container runtime"
      ],
      "ko": [
        "사용자가 override할 수 있는 chart 기본 구성 값를 정의",
        "Chart.yaml에 chart metadata와 version을 정의",
        "마지막 릴리스의 rendered 리소스를 포함",
        "컨테이너 런타임이 사용하는 client socket"
      ]
    },
    "answer": 0,
    "explain": {
      "ko": "values.yaml은 chart 템플릿의 default value를 제공하며 사용자는 다른 values file이나 --set으로 override할 수 있습니다.",
      "en": "values.yaml provides default values for chart templates; users can override them with another values file or --set."
    },
    "ref": "https://helm.sh/docs/chart_template_guide/values_files/"
  },
  {
    "id": "local-220",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "ResourceQuota · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "ko": "ResourceQuota와 LimitRange의 차이는 무엇입니까?",
      "en": "How does ResourceQuota differ from LimitRange?"
    },
    "choices": {
      "en": [
        "ResourceQuota limits namespace totals; LimitRange sets per-object defaults or bounds",
        "ResourceQuota sets per-container defaults; LimitRange limits namespace totals",
        "Both apply only to individual containers, not namespace totals",
        "Both combine all namespaces into one cluster-wide budget"
      ],
      "ko": [
        "ResourceQuota는 네임스페이스 전체 사용량을 제한하고 LimitRange는 객체별 기본값과 범위를 설정",
        "ResourceQuota는 컨테이너별 기본값을 설정하고 LimitRange는 네임스페이스 전체 사용량을 제한",
        "둘 다 개별 컨테이너에만 적용하며 네임스페이스 전체 사용량에는 적용하지 않음",
        "둘 다 모든 네임스페이스를 하나의 클러스터 전체 예산으로 합침"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "ResourceQuota limits aggregate resource totals for a namespace, while LimitRange sets per-object defaults and minimum or maximum bounds. They do not schedule Pods, set image tags, or merge all namespaces into one budget.",
      "ko": "ResourceQuota는 네임스페이스의 리소스 총량을 제한하고 LimitRange는 객체별 기본값과 최소·최대 범위를 설정합니다. 두 리소스는 Pod를 스케줄링하거나 image tag를 설정하거나 모든 네임스페이스를 하나의 예산으로 합치지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/policy/resource-quotas/"
  },
  {
    "id": "local-221",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "cert-manager · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "ko": "cert-관리자는 Kubernetes에서 일반적으로 무엇을 관리합니까?",
      "en": "What does cert-manager commonly manage for Kubernetes?"
    },
    "choices": {
      "ko": [
        "워크로드나 Ingress가 사용하는 Certificate, Issuer 리소스와 TLS Secret",
        "Pod CPU 스케줄링",
        "컨테이너 이미지 계층",
        "etcd 구성원 quorum"
      ],
      "en": [
        "Certificate and Issuer resources and TLS Secrets consumed by workloads or Ingress",
        "Pod CPU scheduling",
        "Container image layers",
        "etcd member quorum"
      ]
    },
    "answer": 0,
    "explain": {
      "ko": "cert-관리자는 Certificate와 Issuer 리소스로 certificate 발급과 갱신을 자동화하고 Ingress 같은 consumer가 사용할 TLS Secret을 작성합니다.",
      "en": "cert-manager automates certificate issuance and renewal from Certificate and Issuer resources and writes resulting TLS Secrets for consumers such as Ingress."
    },
    "ref": "https://cert-manager.io/docs/usage/ingress/"
  },
  {
    "id": "local-222",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "RoleBinding · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "ko": "RoleBinding은 무엇을 합니까?",
      "en": "What does a RoleBinding do?"
    },
    "choices": {
      "ko": [
        "Role 또는 ClusterRole의 permission을 RoleBinding namespace 안에서 부여합니다",
        "모든 namespace에서 permission을 부여합니다",
        "각 subject를 위한 ServiceAccount를 생성합니다",
        "참조된 Role에 permission rule을 정의합니다"
      ],
      "en": [
        "Grants a Role or ClusterRole’s permissions within the RoleBinding’s namespace",
        "Grants permissions in every namespace",
        "Creates ServiceAccounts for each subject",
        "Defines permission rules in the referenced Role"
      ]
    },
    "answer": 0,
    "explain": {
      "ko": "RoleBinding은 참조된 Role 또는 ClusterRole의 permission을 RoleBinding namespace 범위에서 부여합니다. ServiceAccount subject는 다른 namespace에 속할 수 있으며, permission의 범위는 binding namespace입니다.",
      "en": "A RoleBinding grants the referenced Role or ClusterRole permissions within the RoleBinding’s namespace. A ServiceAccount subject may belong to another namespace; the binding namespace is the scope of the granted permissions."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/rbac/"
  },
  {
    "id": "local-224",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "Helm upgrade · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "ko": "helm upgrade는 무엇을 합니까?",
      "en": "What does helm upgrade do?"
    },
    "choices": {
      "en": [
        "Applies new chart configuration to an existing release while preserving release history",
        "Rolls back an existing release to its previous revision",
        "Lists the revisions of an existing release",
        "Renders templates without changing a release"
      ],
      "ko": [
        "릴리스 history를 보존하면서 기존 릴리스에 새 chart 구성을 적용",
        "기존 릴리스를 이전 리비전으로 rollback",
        "기존 릴리스의 리비전을 나열",
        "릴리스를 변경하지 않고 템플릿을 render"
      ]
    },
    "answer": 0,
    "explain": {
      "ko": "helm upgrade는 기존 릴리스에 새 chart version이나 값를 적용하고 rollback 같은 operation을 위해 Helm 릴리스 history를 유지합니다.",
      "en": "helm upgrade applies a new chart version or values to an existing release and maintains Helm release history for operations such as rollback."
    },
    "ref": "https://helm.sh/docs/helm/helm_upgrade/"
  },
  {
    "id": "local-225",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Containers and VMs · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which statement correctly compares containers with virtual machines?",
      "ko": "컨테이너와 virtual machine을 올바르게 비교한 설명은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Containers normally share the host kernel; VMs include their own guest OS",
        "Both normally run separate guest kernels",
        "Containers virtualize hardware while VMs isolate processes within one kernel",
        "Containers require a hypervisor but VMs do not"
      ],
      "ko": [
        "컨테이너는 일반적으로 host kernel을 공유하고 VM은 자체 guest OS를 포함합니다",
        "둘 다 일반적으로 별도의 guest kernel에서 실행됩니다",
        "컨테이너는 hardware를 virtualize하고 VM은 하나의 kernel 안에서 process를 격리합니다",
        "컨테이너에는 hypervisor가 필요하지만 VM에는 필요하지 않습니다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Containerization packages an application and its dependencies in a lightweight isolated environment that shares the host kernel. A virtual machine includes its own guest operating system under virtualization.",
      "ko": "컨테이너화는 application과 dependency를 가벼운 격리 환경에 패키징하면서 host kernel을 공유합니다. virtual machine은 가상화 환경에서 자체 guest operating system을 포함합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/containers/"
  },
  {
    "id": "local-226",
    "exam": "kcna",
    "domain": "Cloud Native Application Delivery",
    "subtopic": "ApplicationSet · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "ko": "Argo CD ApplicationSet은 무엇을 생성합니까?",
      "en": "What does an Argo CD ApplicationSet generate?"
    },
    "choices": {
      "ko": [
        "Git 같은 generator로 클러스터 또는 환경 전반의 Application",
        "컨테이너 런타임 프로세스",
        "PersistentVolume만",
        "Ingress controller"
      ],
      "en": [
        "Applications across clusters or environments from a generator such as Git",
        "Container runtime processes",
        "PersistentVolume objects only",
        "Ingress controllers"
      ]
    },
    "answer": 0,
    "explain": {
      "ko": "ApplicationSet은 Git이나 클러스터 같은 generator를 사용해 여러 Argo CD Application 리소스를 생성하고 synchronized delivery를 관리합니다.",
      "en": "ApplicationSet uses generators such as Git or clusters to create and manage multiple Argo CD Application resources for synchronized delivery."
    },
    "ref": "https://argo-cd.readthedocs.io/en/stable/user-guide/application-set/"
  },
  {
    "id": "local-227",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "CSI · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "ko": "Container Storage 인터페이스는 무엇에 사용됩니까?",
      "en": "What is the Container Storage Interface used for?"
    },
    "choices": {
      "ko": [
        "orchestrator가 스토리지 시스템을 사용하기 위한 cross-플랫폼 plugin specification",
        "Pod 스케줄링 algorithm",
        "Service DNS protocol",
        "GitOps reconciliation controller"
      ],
      "en": [
        "A cross-platform plugin specification for orchestrators to use storage systems",
        "A Pod scheduling algorithm",
        "A Service DNS protocol",
        "A GitOps reconciliation controller"
      ]
    },
    "answer": 0,
    "explain": {
      "ko": "CSI는 Kubernetes와 다른 orchestrator가 driver와 sidecar 및 PV, PVC, StorageClass 리소스를 통해 스토리지 시스템과 통합하는 표준 plugin 인터페이스입니다.",
      "en": "CSI is a standard plugin interface that lets Kubernetes and other orchestrators integrate storage systems through drivers and sidecars with PV, PVC, and StorageClass resources."
    },
    "ref": "https://kubernetes-csi.github.io/docs/"
  },
  {
    "id": "local-228",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "ErrImagePull · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "ko": "ErrImagePull은 일반적으로 무엇을 의미합니까?",
      "en": "What does ErrImagePull commonly indicate?"
    },
    "choices": {
      "en": [
        "Kubernetes cannot download the container image, often due to a bad tag, registry authentication, or network issue",
        "The container passed its readiness probe",
        "The image was pulled and the process exited normally",
        "The Service has no selector"
      ],
      "ko": [
        "잘못된 tag, registry 인증, 네트워크 문제 등으로 Kubernetes가 컨테이너 이미지를 download하지 못함",
        "컨테이너가 readiness probe를 통과함",
        "이미지를 pull했고 프로세스가 정상 종료됨",
        "Service에 selector가 없음"
      ]
    },
    "answer": 0,
    "explain": {
      "ko": "ErrImagePull은 kubelet 또는 런타임이 이미지를 pull하지 못했다는 뜻이며 이미지 name, tag, registry credential, 네트워크를 확인해야 합니다.",
      "en": "ErrImagePull means the kubelet or runtime could not pull the image; inspect the image name, tag, registry credentials, and network connectivity."
    },
    "ref": "https://kubernetes.io/docs/concepts/containers/images/"
  },
  {
    "id": "local-229",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "ConfigMap consumption · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "ko": "ConfigMap은 non-confidential 구성을 Pod에 어떻게 제공합니까?",
      "en": "How can a ConfigMap provide non-confidential configuration to a Pod?"
    },
    "choices": {
      "en": [
        "As environment variables, files, or command arguments",
        "As a Secret for confidential credentials",
        "As a Downward API field containing Pod metadata",
        "As a PersistentVolume mounted for application data"
      ],
      "ko": [
        "환경 variable, 파일, 명령 argument로",
        "confidential credential을 위한 Secret으로",
        "Pod metadata를 담은 Downward API 필드로",
        "애플리케이션 data를 위한 PersistentVolume으로"
      ]
    },
    "answer": 0,
    "explain": {
      "ko": "ConfigMap은 환경 variable, mount 파일, 명령 argument로 Pod가 사용할 수 있으며 non-confidential 구성용입니다.",
      "en": "A ConfigMap can be consumed by a Pod as environment variables, mounted files, or command arguments. It is intended for non-confidential configuration."
    },
    "ref": "https://kubernetes.io/docs/concepts/configuration/configmap/"
  },
  {
    "id": "local-230",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "kubectl exec DNS test · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "ko": "실행 중인 Pod 내부에서 DNS resolution을 test하는 명령는 무엇입니까?",
      "en": "Which command tests DNS resolution from inside a running Pod?"
    },
    "choices": {
      "ko": [
        "kubectl exec POD -- nslookup NAME",
        "kubectl get pods --dns NAME",
        "kubectl label POD dns=NAME",
        "kubectl describe node --resolve NAME"
      ],
      "en": [
        "kubectl exec POD -- nslookup NAME",
        "kubectl get pods --dns NAME",
        "kubectl label POD dns=NAME",
        "kubectl describe node --resolve NAME"
      ]
    },
    "answer": 0,
    "explain": {
      "ko": "kubectl exec는 container 내부에서 nslookup을 실행하여 Pod의 DNS configuration과 cluster DNS response를 직접 test합니다.",
      "en": "kubectl exec runs nslookup inside the container, allowing direct testing of the Pod's DNS configuration and cluster DNS response."
    },
    "ref": "https://kubernetes.io/docs/tasks/administer-cluster/dns-debugging-resolution/"
  },
  {
    "id": "local-231",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "NetworkPolicy additive behavior · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What happens when multiple NetworkPolicies select the same Pod?",
      "ko": "여러 NetworkPolicy가 같은 Pod를 선택하면 어떻게 됩니까?"
    },
    "choices": {
      "en": [
        "The union of allowed traffic from matching policies applies",
        "The intersection of all matching policies applies",
        "Only the newest policy applies",
        "All traffic is denied whenever two policies select the Pod"
      ],
      "ko": [
        "일치하는 정책에서 허용한 traffic의 합집합이 적용됩니다",
        "일치하는 모든 정책의 교집합이 적용됩니다",
        "가장 최근 정책만 적용됩니다",
        "두 정책이 Pod를 선택하면 모든 traffic이 차단됩니다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "For a selected Pod, Ingress policy rules govern incoming traffic and Egress rules govern outgoing traffic. When multiple policies select the Pod and declare the same direction, the allowed traffic is the union of their rules; one policy does not replace another.",
      "ko": "선택된 Pod에서 Ingress policy rule은 들어오는 traffic을, Egress rule은 나가는 traffic을 제어합니다. 여러 정책이 같은 Pod를 선택하고 동일한 방향을 선언하면 허용 traffic은 해당 rule의 합집합이며, 한 정책이 다른 정책을 대체하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/network-policies/"
  },
  {
    "id": "local-232",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "Pod placement inspection · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "ko": "클러스터 전체에서 Pod placement를 확인하려면 어떤 명령를 사용합니까?",
      "en": "Which command lists Pods with node placement for cluster-wide inspection?"
    },
    "choices": {
      "ko": [
        "kubectl get pods -o wide --all-namespaces",
        "kubectl get nodes --containers",
        "kubectl describe service --node",
        "kubectl logs --placement"
      ],
      "en": [
        "kubectl get pods -o wide --all-namespaces",
        "kubectl get nodes --containers",
        "kubectl describe service --node",
        "kubectl logs --placement"
      ]
    },
    "answer": 0,
    "explain": {
      "ko": "kubectl get pods -o wide --all-namespaces는 node placement를 포함하며 maintenance 전에 spec.nodeName 필드 selector로 결과를 좁힐 수 있습니다.",
      "en": "kubectl get pods -o wide --all-namespaces includes node placement; a field selector such as spec.nodeName can narrow the result before maintenance work."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/cheatsheet/"
  },
  {
    "id": "local-233",
    "exam": "kcna",
    "domain": "Cloud Native Architecture",
    "subtopic": "Kubernetes Community Days · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "ko": "cloud-native community에서 KCD는 무엇의 약자입니까?",
      "en": "What does KCD stand for in the cloud-native community?"
    },
    "choices": {
      "ko": [
        "Kubernetes Community Days",
        "Kubernetes Container Driver",
        "Kernel Configuration 데이터베이스",
        "Kube Controller Daemon"
      ],
      "en": [
        "Kubernetes Community Days",
        "Kubernetes Container Driver",
        "Kernel Configuration Database",
        "Kube Controller Daemon"
      ]
    },
    "answer": 0,
    "explain": {
      "ko": "KCD는 일반적으로 Kubernetes Community Days를 뜻하며 Kubernetes knowledge sharing과 collaboration을 위한 community-organized 이벤트입니다.",
      "en": "KCD commonly stands for Kubernetes Community Days, community-organized events for sharing Kubernetes knowledge and collaboration."
    },
    "ref": "https://kubernetescommunitydays.org/"
  },
  {
    "id": "local-234",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "kubectl drain · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "ko": "유지보수를 위해 kubectl drain worker-1은 무엇을 합니까?",
      "en": "What does kubectl drain worker-1 do for maintenance?"
    },
    "choices": {
      "en": [
        "It cordons the node and evicts eligible workloads so controllers can reschedule them elsewhere",
        "It only cordons the node and never evicts workloads",
        "It deletes every workload immediately without respecting disruption rules",
        "It makes the node eligible for new scheduling during maintenance"
      ],
      "ko": [
        "노드를 cordon하고 eligible 워크로드를 evict하여 controller가 다른 곳에 reschedule하도록 함",
        "노드만 cordon하고 워크로드는 절대 evict하지 않음",
        "disruption 규칙을 무시하고 모든 워크로드를 즉시 삭제",
        "maintenance 중 노드가 새 스케줄링 대상이 되게 함"
      ]
    },
    "answer": 0,
    "explain": {
      "ko": "kubectl drain은 node를 cordon하고 maintenance를 위해 eligible workload Pod를 evict하여 controller가 다른 node에 replacement를 만들 수 있게 합니다. DaemonSet Pod는 일반적으로 --ignore-daemonsets가 필요합니다.",
      "en": "kubectl drain cordons a node and evicts eligible workload Pods for maintenance; controllers can create replacements on other nodes. DaemonSet Pods generally require --ignore-daemonsets."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_drain/"
  },
  {
    "id": "local-235",
    "exam": "kcna",
    "domain": "Kubernetes Fundamentals",
    "subtopic": "TLS Secret creation · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What does kubectl create secret tls tls-secret --cert=path/to/tls.crt --key=path/to/tls.key create?",
      "ko": "kubectl create secret tls tls-secret --cert=path/to/tls.crt --key=path/to/tls.key는 무엇을 생성합니까?"
    },
    "choices": {
      "en": [
        "A kubernetes.io/tls Secret named tls-secret",
        "A Deployment named tls-secret",
        "A GatewayClass with a TLS controller",
        "A CertificateSigningRequest without key data"
      ],
      "ko": [
        "tls-secret이라는 kubernetes.io/tls Secret",
        "tls-secret이라는 Deployment",
        "TLS controller가 있는 GatewayClass",
        "key data 없는 CertificateSigningRequest"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The command creates a kubernetes.io/tls Secret named tls-secret from the certificate and private-key file. It does not create a Deployment or Gateway API resource.",
      "ko": "이 명령는 certificate와 프라이빗-key 파일로 tls-secret이라는 kubernetes.io/tls Secret을 생성합니다. Deployment나 Gateway API 리소스를 생성하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/kubectl/generated/kubectl_create/kubectl_create_secret_tls/"
  },
  {
    "id": "local-237",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "4Cs of Cloud Native Security · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "In the 4Cs model, which layer contains the code and configuration of the application itself?",
      "ko": "4Cs 모델에서 애플리케이션 자체의 코드와 구성을 포함하는 계층은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Code",
        "Cluster",
        "Cloud",
        "Container"
      ],
      "ko": [
        "Code",
        "cluster",
        "Cloud",
        "container"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The 4Cs are Cloud, Cluster, Container, and Code. Code is the application and its dependencies; the other layers provide progressively broader infrastructure and runtime protection.",
      "ko": "4Cs는 Cloud, cluster, container, Code입니다. Code는 애플리케이션과 dependency이며 나머지 계층은 더 넓은 인프라와 runtime 보호를 제공합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/overview/"
  },
  {
    "id": "local-238",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "4Cs of Cloud Native Security · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which sequence orders the 4Cs from the broadest foundation to the application layer?",
      "ko": "가장 넓은 기반부터 애플리케이션 계층까지 4Cs를 올바르게 나열한 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Code, Container, Cluster, Cloud",
        "Cloud, Cluster, Container, Code",
        "Cluster, Cloud, Code, Container",
        "Container, Code, Cloud, Cluster"
      ],
      "ko": [
        "Code, container, cluster, Cloud",
        "Cloud, cluster, container, Code",
        "cluster, Cloud, Code, container",
        "container, Code, Cloud, cluster"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The model moves from Cloud infrastructure to the Kubernetes Cluster, then the Container runtime layer, and finally application Code. Security at each layer supports the layers above it.",
      "ko": "이 모델은 Cloud 인프라에서 Kubernetes cluster, container runtime 계층, 애플리케이션 Code 순으로 이어집니다. 각 계층의 보안은 그 위 계층을 지원합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/overview/"
  },
  {
    "id": "local-239",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Cloud provider responsibility · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Under a shared-responsibility model, who normally secures the physical facilities of a managed cloud service?",
      "ko": "공유 책임 모델에서 managed cloud service의 물리적 시설 보안은 일반적으로 누가 담당합니까?"
    },
    "choices": {
      "en": [
        "The customer's platform team",
        "The application team",
        "The cloud provider",
        "The customer's security operations team"
      ],
      "ko": [
        "고객의 플랫폼 팀",
        "애플리케이션 팀",
        "클라우드 제공자",
        "고객의 보안 운영 팀"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "The cloud provider secures the physical facilities; customer teams secure workloads, applications, and customer configuration.",
      "ko": "클라우드 제공자는 물리적 시설을 보호하고 고객 팀은 workload, application과 customer configuration을 보호합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/overview/"
  },
  {
    "id": "local-240",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Shared responsibility · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "A team leaves a public object store readable by everyone. Which conclusion best fits shared responsibility?",
      "ko": "팀이 공개된 object store를 모든 사람이 읽을 수 있게 두었습니다. 공유 책임 모델에 맞는 결론은 무엇입니까?"
    },
    "choices": {
      "en": [
        "The customer owns the object-store access policy",
        "The provider secures the service but does not choose each customer policy",
        "Kubernetes configuration does not remove cloud storage exposure",
        "The customer misconfigured its data access; the provider's physical security does not make the object private"
      ],
      "ko": [
        "customer가 object-store access policy를 책임짐",
        "provider는 service를 보호하지만 각 customer policy를 선택하지 않음",
        "Kubernetes configuration이 cloud storage 노출을 제거하지 않음",
        "고객이 data access를 잘못 구성한 것이며 provider의 물리적 보안이 object를 비공개로 만들지는 않습니다"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "The customer controlled the object-store permission and left it public. A provider's facility security does not override customer access settings.",
      "ko": "고객이 object-store 권한을 공개로 설정했기 때문에 누구나 object를 읽을 수 있었습니다. provider의 물리적 시설 보안은 고객의 access 설정을 대신하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/overview/"
  },
  {
    "id": "local-241",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Defense in depth · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is the main purpose of defense in depth for a cloud-native workload?",
      "ko": "cloud-native workload에 defense in depth를 적용하는 주된 목적은 무엇입니까?"
    },
    "choices": {
      "en": [
        "To use multiple independent controls so one failed control does not expose everything",
        "Use a single firewall as the only control",
        "Rely on provider controls without securing the workload",
        "Remove telemetry so failures are harder to detect"
      ],
      "ko": [
        "여러 독립적인 control을 사용하여 하나가 실패해도 모든 것이 노출되지 않게 함",
        "single firewall만 유일한 control로 사용함",
        "workload를 보호하지 않고 provider control에만 의존함",
        "failure를 detect하기 어렵게 telemetry를 제거함"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Defense in depth combines independent preventive, detective, and recovery controls. A single firewall, provider-only responsibility, or reduced telemetry leaves other failure paths unaddressed.",
      "ko": "Defense in depth는 예방·탐지·복구 통제를 여러 겹으로 구성합니다. 단일 firewall이나 provider에만 의존하고 telemetry를 줄이면 다른 failure path가 남습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/overview/"
  },
  {
    "id": "local-242",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Isolation techniques · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which isolation technique most directly limits a workload to a separate kernel boundary?",
      "ko": "workload를 별도의 kernel 경계로 가장 직접적으로 제한하는 isolation 기법은 무엇입니까?"
    },
    "choices": {
      "en": [
        "A container process namespace sharing the node kernel",
        "A virtual machine boundary",
        "A sandboxed runtime boundary without a guest kernel",
        "A dedicated node placement constraint"
      ],
      "ko": [
        "node kernel을 공유하는 container process namespace",
        "virtual machine 경계",
        "guest kernel이 없는 sandboxed runtime 경계",
        "dedicated node placement constraint"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "A virtual machine supplies a separate guest-kernel boundary. A process namespace, sandbox configuration without a guest kernel, or node placement constraint does not by itself create that boundary.",
      "ko": "virtual machine은 별도의 guest-kernel 경계를 제공합니다. process namespace, guest kernel 없는 sandbox 설정과 node 배치 제약만으로는 같은 경계가 생기지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/overview/"
  },
  {
    "id": "local-243",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Container isolation · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Why does sharing a host kernel make container isolation different from virtual-machine isolation?",
      "ko": "host kernel을 공유하기 때문에 container isolation은 virtual-machine isolation과 어떻게 다릅니까?"
    },
    "choices": {
      "en": [
        "A container process namespace provides a separate guest kernel",
        "A virtual machine's image tag determines kernel isolation",
        "A kernel vulnerability can have broader impact across containers sharing that kernel",
        "Each container runs its own kernel, so a kernel flaw is limited to one container"
      ],
      "ko": [
        "container process namespace가 별도의 guest kernel을 제공함",
        "virtual machine의 image tag가 kernel isolation을 결정함",
        "kernel을 공유하는 container 전체에 kernel vulnerability의 영향이 더 넓을 수 있습니다",
        "각 container가 자체 kernel을 실행하므로 kernel flaw는 하나의 container에만 제한됨"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Containers share the host kernel, so a kernel flaw can affect multiple containers that rely on it. A namespace is not a guest kernel, and a shared kernel does not provide traffic encryption.",
      "ko": "container는 host kernel을 공유하므로 kernel flaw가 그 kernel에 의존하는 여러 container에 영향을 줄 수 있습니다. namespace는 guest kernel이 아니며 shared kernel이 traffic을 암호화하지도 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/overview/"
  },
  {
    "id": "local-244",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Artifact repository security · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which repository control best ensures that only approved identities can publish a production image tag?",
      "ko": "승인된 identity만 production image tag를 publish하도록 보장하는 데 가장 적합한 registry control은 무엇입니까?"
    },
    "choices": {
      "en": [
        "A digest reference used after publication",
        "A pull-only policy without publisher authentication",
        "A vulnerability scan report without write authorization",
        "Restricting push permissions and requiring authenticated, auditable writes"
      ],
      "ko": [
        "publication 후 사용하는 digest reference",
        "publisher authentication이 없는 pull-only policy",
        "write authorization이 없는 vulnerability scan report",
        "push 권한을 제한하고 인증된 audit 가능한 write를 요구함"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Push authorization determines which identities may replace a published tag, while authenticated audit records provide accountability. A digest, pull-only rule, or scan report does not grant that publishing control.",
      "ko": "push authorization은 어떤 identity가 published tag를 바꿀 수 있는지 결정하고 audit record는 책임 추적을 제공합니다. digest, pull-only rule과 scan report는 publish 권한을 부여하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/containers/images/"
  },
  {
    "id": "local-245",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Image integrity · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What does pinning a container image by digest provide?",
      "ko": "container image를 digest로 pinning하면 무엇을 얻습니까?"
    },
    "choices": {
      "en": [
        "A reference to immutable content identified by its cryptographic digest",
        "Automatic removal of every vulnerability",
        "A guarantee that the process runs as non-root",
        "A replacement for registry authentication"
      ],
      "ko": [
        "cryptographic digest로 식별되는 immutable 콘텐츠에 대한 reference",
        "모든 vulnerability의 자동 제거",
        "process가 non-root로 실행된다는 보장",
        "registry authentication의 대체"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A digest identifies the image content, so the same reference resolves to the verified content unless the digest itself changes. It does not remove vulnerabilities or configure runtime identity.",
      "ko": "digest는 image 콘텐츠를 식별하므로 digest가 바뀌지 않는 한 같은 reference가 검증된 콘텐츠를 가리킵니다. vulnerability를 제거하거나 runtime identity를 구성하지는 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/containers/images/"
  },
  {
    "id": "local-246",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Artifact signing · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What question does a signature on a container artifact primarily help answer?",
      "ko": "container artifact의 signature는 주로 어떤 질문에 답하는 데 도움이 됩니까?"
    },
    "choices": {
      "en": [
        "A valid signature from an approved identity",
        "A software bill of materials",
        "A build provenance statement",
        "A vulnerability scan report"
      ],
      "ko": [
        "승인된 identity의 유효한 signature",
        "software bill of materials",
        "build provenance statement",
        "취약점 scan report"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Signature verification establishes provenance or integrity according to a trusted key policy. It does not prove the artifact is vulnerability-free or determine scheduling.",
      "ko": "signature verification은 trusted key policy에 따라 provenance 또는 integrity를 확인합니다. artifact에 vulnerability가 없음을 증명하거나 scheduling을 결정하지는 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/containers/images/"
  },
  {
    "id": "local-247",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "SBOM · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "In a Kubernetes image review, what information does an SBOM primarily provide?",
      "ko": "Kubernetes image review에서 SBOM은 주로 어떤 정보를 제공합니까?"
    },
    "choices": {
      "en": [
        "A software bill of materials listing image components and dependencies",
        "A build provenance statement",
        "A VEX statement",
        "An artifact signature"
      ],
      "ko": [
        "image component와 dependency를 나열한 software bill of materials",
        "build provenance statement",
        "VEX statement",
        "artifact signature"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "An SBOM inventories the image's software components and dependencies, making vulnerability review more traceable; it is not provenance, VEX, or a signature.",
      "ko": "SBOM은 image의 software component와 dependency를 inventory로 만들어 vulnerability review를 추적하기 쉽게 합니다. provenance, VEX 또는 signature는 아닙니다."
    },
    "ref": "https://spdx.dev/"
  },
  {
    "id": "local-248",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Image scanning · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Why should image scanning be combined with runtime controls?",
      "ko": "image scanning을 runtime 통제과 함께 사용해야 하는 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Scanning and runtime controls are identical operations",
        "Scanning automatically prevents every exploit after deployment",
        "Runtime controls make dependency inventory unnecessary",
        "Scanning finds known issues at a point in time, while runtime controls address behavior and context"
      ],
      "ko": [
        "scanning과 runtime 통제은 동일한 operation입니다",
        "scanning이 배포 후 모든 exploit을 자동으로 막습니다",
        "runtime 통제이 dependency inventory를 불필요하게 만듭니다",
        "scanning은 특정 시점의 알려진 문제를 찾고 runtime 통제은 동작과 context를 다룹니다"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Scanners have coverage and timing limits; a clean result is not a guarantee of safe behavior. Admission, least privilege, and runtime monitoring provide additional layers.",
      "ko": "scanner에는 coverage와 시점의 한계가 있으므로 clean result가 안전한 동작을 보장하지 않습니다. admission, least privilege와 runtime monitoring이 추가 계층을 제공합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/containers/images/"
  },
  {
    "id": "local-249",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Workload identity · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which identity design follows least privilege for a workload reading one object-store bucket?",
      "ko": "하나의 object-store bucket만 읽는 workload에 least privilege를 따르는 identity 설계는 무엇입니까?"
    },
    "choices": {
      "en": [
        "A dedicated identity granted read access only to that bucket",
        "The node identity with administrator access to every bucket",
        "One shared administrator identity for every namespace",
        "An anonymous identity with unrestricted network access"
      ],
      "ko": [
        "해당 bucket만 read할 수 있는 전용 identity",
        "모든 bucket에 관리자 access가 있는 node identity",
        "모든 namespace가 공유하는 관리자 identity",
        "제한 없는 network access가 있는 anonymous identity"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A dedicated identity scoped to the required resource limits blast radius. Sharing node or administrator credentials grants permissions unrelated to the workload's need.",
      "ko": "필요한 resource로 범위를 제한한 전용 identity는 피해 범위를 줄입니다. node 또는 관리자 credential을 공유하면 workload에 불필요한 권한을 부여합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/service-accounts/"
  },
  {
    "id": "local-250",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Application code security · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which practice most directly reduces the risk of shipping a known vulnerable dependency in a Kubernetes workload image?",
      "ko": "Kubernetes workload image에서 알려진 취약 dependency를 배포하는 위험을 가장 직접적으로 줄이는 방법은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Software composition analysis of dependency versions",
        "Static analysis of source-code patterns",
        "Dynamic testing of the running service",
        "Verification of who signed the image"
      ],
      "ko": [
        "dependency version의 software composition analysis",
        "source-code pattern의 static analysis",
        "running service의 dynamic test",
        "누가 image에 sign했는지 verification함"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Software composition analysis compares dependency versions with vulnerability data, which directly targets vulnerable libraries. Static analysis, dynamic testing, and signatures answer different questions.",
      "ko": "software composition analysis는 dependency version을 vulnerability data와 비교하므로 취약 library를 직접 다룹니다. static analysis, dynamic test와 signature는 서로 다른 질문에 답합니다."
    },
    "ref": "https://owasp.org/www-project-dependency-check/"
  },
  {
    "id": "local-251",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Secret handling · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Where should an application team avoid placing a database password?",
      "ko": "애플리케이션 팀은 database password를 어디에 두지 않아야 합니까?"
    },
    "choices": {
      "en": [
        "An access-controlled runtime secret",
        "A restricted secret manager referenced at deployment",
        "A container image layer or public source repository",
        "An encrypted secret store with rotation"
      ],
      "ko": [
        "access-controlled runtime secret",
        "배포 시 참조하는 제한된 secret manager",
        "container image layer 또는 공개된 source repository",
        "rotation이 있는 encrypted secret store"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Image layers and source repositories are commonly copied, cached, or exposed, so embedding a password there broadens access. Use a controlled secret-delivery mechanism instead.",
      "ko": "image layer와 source repository는 복사·cache·노출될 수 있어 password를 넣으면 access 범위가 커집니다. 대신 통제된 secret 전달 mechanism을 사용해야 합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/configuration/secret/"
  },
  {
    "id": "local-252",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Workload configuration · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which configuration change most directly removes unnecessary Linux privileges from a container?",
      "ko": "container에서 불필요한 Linux privilege를 가장 직접적으로 제거하는 구성 변경은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Set privileged to true for compatibility",
        "Add hostNetwork so the container can reach services",
        "Mount the host filesystem read-write",
        "Run the process as a non-root user and drop unneeded capabilities"
      ],
      "ko": [
        "호환성을 위해 privileged를 true로 설정함",
        "container가 service에 접근하도록 hostNetwork를 추가함",
        "host filesystem을 read-write로 mount함",
        "process를 non-root user로 실행하고 불필요한 capability를 drop함"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "A non-root identity and a reduced capability set limit what a compromised process can do. Host namespaces, writable host mounts, and privileged mode expand access.",
      "ko": "non-root identity와 축소된 capability set은 침해된 process의 동작 범위를 제한합니다. host namespace, writable host mount와 privileged mode는 access를 확장합니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/configure-pod-container/security-context/"
  },
  {
    "id": "local-253",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Isolation techniques · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What is the security value of placing unrelated workloads in separate namespaces?",
      "ko": "서로 관련 없는 workload를 별도 namespace에 배치하는 보안 가치는 무엇입니까?"
    },
    "choices": {
      "en": [
        "It provides an administrative boundary for names, policy, and access, but is not a complete kernel boundary",
        "It gives every Pod a separate physical host automatically",
        "It encrypts all traffic without a network plugin",
        "It makes every Service unreachable"
      ],
      "ko": [
        "name, policy와 access를 위한 administrative boundary를 제공하지만 완전한 kernel 경계는 아닙니다",
        "모든 Pod에 별도 physical host를 자동으로 제공합니다",
        "network plugin 없이 모든 traffic을 암호화합니다",
        "모든 Service를 접근 불가로 만듭니다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Namespaces help scope RBAC, quotas, and policy. They organize and control resources but do not by themselves provide VM-like kernel isolation or universal encryption.",
      "ko": "namespace는 RBAC, quota와 policy의 범위를 정하는 데 도움을 줍니다. resource를 조직하고 제어하지만 자체적으로 VM 수준 kernel isolation이나 universal encryption을 제공하지는 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"
  },
  {
    "id": "local-254",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Policy as code · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is a key benefit of expressing security policy as versioned code?",
      "ko": "보안 policy를 버전 관리된 code로 표현할 때의 주요 이점은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Policies become impossible to audit",
        "Changes can be reviewed, tested, and reproduced through the delivery workflow",
        "Every workload automatically receives administrator access",
        "Manual approval is no longer possible"
      ],
      "ko": [
        "policy를 audit할 수 없게 됩니다",
        "변경을 delivery workflow에서 review, test하고 재현할 수 있습니다",
        "모든 workload가 자동으로 관리자 access를 받습니다",
        "수동 승인이 더 이상 불가능합니다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Versioned policy gives teams review history, repeatable tests, and reproducible deployment. It complements rather than eliminates governance and approvals.",
      "ko": "버전 관리된 policy는 review history, 반복 가능한 test와 재현 가능한 deployment를 제공합니다. governance와 approval을 없애지 않고 보완합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-255",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Build provenance · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which evidence best links a deployed image to the source and build that produced it?",
      "ko": "배포된 image를 이를 만든 source와 build에 가장 잘 연결하는 evidence는 무엇입니까?"
    },
    "choices": {
      "en": [
        "A signed provenance record with source revision and build details",
        "A digest without source or builder context",
        "An SBOM listing runtime components",
        "A signature without any identity metadata"
      ],
      "ko": [
        "소스 revision과 build detail이 있는 signed provenance record",
        "source 또는 builder context가 없는 digest",
        "runtime component를 나열한 SBOM",
        "identity metadata가 전혀 없는 signature"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Provenance records describe where and how an artifact was built; signing lets a verifier authenticate that statement. Runtime counters and network addresses do not establish build origin.",
      "ko": "provenance record는 artifact가 어디서 어떻게 build되었는지 설명하고 signing은 그 진술을 검증하게 합니다. runtime counter와 network address는 build 출처을 입증하지 않습니다."
    },
    "ref": "https://slsa.dev/spec/v1.2/"
  },
  {
    "id": "local-256",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Cloud infrastructure security · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "A workload can query a cloud instance metadata endpoint it does not need. What is the best first security response?",
      "ko": "workload가 필요하지 않은 cloud instance metadata endpoint를 query할 수 있습니다. 가장 먼저 할 보안 대응은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Keep audit logging enabled while restricting metadata egress",
        "Remove only the workload permission that is not needed",
        "Route the metadata endpoint through a public Service",
        "Restrict metadata access and remove the workload's unnecessary network path"
      ],
      "ko": [
        "감사 로깅을 유지하면서 metadata egress를 제한함",
        "필요하지 않은 workload 권한만 제거함",
        "metadata endpoint를 공개된 Service로 route함",
        "metadata access를 제한하고 workload의 불필요한 network path를 제거함"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "The metadata endpoint should be unreachable unless the workload needs it, and the workload should not retain unnecessary cloud permissions. Making it public increases exposure.",
      "ko": "workload에 필요하지 않은 metadata endpoint는 접근할 수 없게 하고 불필요한 cloud 권한도 제거해야 합니다. endpoint를 공개하면 노출 범위가 커집니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-257",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Artifact lifecycle · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Why should an organization define retention and revocation rules for signed artifacts?",
      "ko": "조직이 signed artifact에 대한 보존 및 revocation 규칙을 정의해야 하는 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "To handle key compromise, obsolete releases, and audit requirements consistently",
        "To make signatures optional for production",
        "To guarantee that old images have no vulnerabilities",
        "To replace all access control with a timestamp"
      ],
      "ko": [
        "key compromise, obsolete release와 audit 요구를 일관되게 처리하기 위해",
        "production에서 signature를 optional로 만들기 위해",
        "오래된 image에 vulnerability가 없음을 보장하기 위해",
        "모든 access control을 timestamp로 대체하기 위해"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Lifecycle policy tells operators which artifacts remain trusted and available, and how to respond when a signing key or release is compromised. It does not make software inherently safe.",
      "ko": "lifecycle policy는 어떤 artifact를 신뢰하고 제공할지와 signing key 또는 release compromise에 대응하는 방법을 정합니다. software 자체를 안전하게 만들지는 않습니다."
    },
    "ref": "https://slsa.dev/spec/v1.2/"
  },
  {
    "id": "local-258",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Container base images · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is one security advantage of a minimal container base image?",
      "ko": "minimal container base image의 보안 이점은 무엇입니까?"
    },
    "choices": {
      "en": [
        "It guarantees that the application has no dependency vulnerabilities",
        "It reduces unnecessary packages and therefore the attack surface",
        "It grants the process access to the host kernel filesystem",
        "It removes the need for patching"
      ],
      "ko": [
        "애플리케이션에 dependency vulnerability가 없음을 보장합니다",
        "불필요한 package를 줄여 attack surface를 감소시킵니다",
        "process에 host kernel filesystem access를 부여합니다",
        "patching이 필요 없게 합니다"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Fewer packages generally mean fewer components to configure and patch. A minimal image still needs vulnerability review, updates, and secure runtime settings.",
      "ko": "package가 적으면 구성하고 patch할 component도 일반적으로 줄어듭니다. minimal image에도 vulnerability review, update와 secure runtime setting이 필요합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/containers/images/"
  },
  {
    "id": "local-259",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Security controls and frameworks · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "A Kubernetes CIS benchmark review finds that API server audit logging is not configured. What does mapping this finding to a control provide?",
      "ko": "Kubernetes CIS benchmark review에서 API server 감사 로깅이 구성되지 않은 것을 발견했습니다. 이 finding을 control에 mapping하면 무엇을 얻습니까?"
    },
    "choices": {
      "en": [
        "A guarantee that every attack is blocked",
        "Automatic certification without evidence",
        "Traceability from the benchmark requirement to the API-server setting, evidence, and remediation test",
        "A replacement for incident response"
      ],
      "ko": [
        "모든 attack이 차단된다는 보장",
        "evidence 없는 자동 certification",
        "benchmark requirement에서 API-server setting, evidence와 remediation test까지의 traceability",
        "incident response의 대체"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "The mapping links the CIS requirement to the Kubernetes configuration, captured audit-policy evidence, and a test that confirms the fix; it does not certify the whole cluster.",
      "ko": "mapping은 CIS requirement를 Kubernetes configuration, audit-policy evidence와 수정 확인 test에 연결하지만 cluster 전체를 certification하지는 않습니다."
    },
    "ref": "https://www.cisecurity.org/benchmark/kubernetes"
  },
  {
    "id": "local-260",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Workload and application code security · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which review is most useful before accepting an application that constructs SQL queries from user input?",
      "ko": "사용자 input으로 SQL query를 만드는 애플리케이션을 승인하기 전에 어떤 review가 가장 유용합니까?"
    },
    "choices": {
      "en": [
        "An image vulnerability scan without code-query review",
        "A dynamic endpoint test that does not exercise query construction",
        "A dependency inventory that does not inspect query handling",
        "A secure-code review for parameterized queries and input handling"
      ],
      "ko": [
        "code-query review 없는 image vulnerability scan",
        "query construction을 실행하지 않는 dynamic endpoint test",
        "query handling을 inspect하지 않는 dependency inventory",
        "parameterized query와 input handling을 확인하는 secure-code review"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "A secure-code review can verify parameterized queries and input handling at the point where SQL is constructed. Image scanning, endpoint tests that omit the query path, and dependency inventory do not replace that code review.",
      "ko": "secure-code review는 SQL이 구성되는 지점의 parameterized query와 input handling을 확인할 수 있습니다. query 경로를 실행하지 않는 endpoint test나 image scan·dependency inventory만으로는 이를 대신할 수 없습니다."
    },
    "ref": "https://owasp.org/www-community/attacks/SQL_Injection"
  },
  {
    "id": "local-261",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Security automation · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What should an automated security check do when it finds a critical image vulnerability in a release candidate?",
      "ko": "automated 보안 check가 release candidate에서 critical image vulnerability를 발견하면 무엇을 해야 합니까?"
    },
    "choices": {
      "en": [
        "Fail or quarantine the candidate under documented release policy",
        "Record the finding and publish despite a blocking policy",
        "Defer the finding until after deployment",
        "A policy record missing the relevant scope or review evidence"
      ],
      "ko": [
        "documented release policy에 따라 candidate를 fail 또는 quarantine함",
        "blocking policy에도 finding을 기록하고 publish함",
        "deployment 후까지 finding을 defer함",
        "관련 범위나 검토 evidence가 빠진 policy record"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A critical vulnerability should block or quarantine a release candidate when policy says it is a release gate. Publishing anyway, deferring the finding, or granting privilege bypasses that gate.",
      "ko": "policy가 release gate로 지정한 critical vulnerability라면 candidate를 block하거나 quarantine해야 합니다. 그대로 publish하거나 finding을 미루고 privilege를 주면 gate를 우회하게 됩니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-262",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Threat modeling · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "In a threat model, why are trust boundaries drawn around a workload and its dependencies?",
      "ko": "threat model에서 workload와 dependency 주위에 trust boundary를 그리는 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Assign every component the same trust level",
        "To identify where assumptions about identity, data, or control change",
        "Treat the diagram as proof that attacks are impossible",
        "Use the diagram instead of monitoring controls"
      ],
      "ko": [
        "모든 component에 같은 trust level을 할당함",
        "identity, data 또는 control에 대한 가정이 바뀌는 지점을 식별하기 위해",
        "diagram을 attack이 불가능하다는 증명으로 취급함",
        "monitoring control 대신 diagram을 사용함"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "A trust boundary marks a change in assumptions about identity, data, or control, so the crossing can receive focused authentication, authorization, validation, or monitoring. A diagram does not prove safety or replace those controls.",
      "ko": "trust boundary는 identity·data·control에 대한 가정이 바뀌는 지점이므로 crossing에 authentication, authorization, validation과 monitoring을 집중할 수 있습니다. diagram은 안전을 증명하거나 통제를 대신하지 않습니다."
    },
    "ref": "https://owasp.org/www-community/Threat_Modeling"
  },
  {
    "id": "local-263",
    "exam": "kcsa",
    "domain": "Overview of Cloud Native Security",
    "subtopic": "Cloud-native security culture · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "During a Kubernetes deployment review, which team behavior best supports security practice?",
      "ko": "Kubernetes deployment review 중 어떤 team behavior가 보안 practice를 가장 잘 지원합니까?"
    },
    "choices": {
      "en": [
        "Assign every security decision to one person and skip peer review",
        "Hide an image vulnerability until after production deployment",
        "Review the Pod manifest and security findings early, then track remediation before rollout",
        "Treat RBAC and NetworkPolicy changes as unrelated to application delivery"
      ],
      "ko": [
        "모든 보안 decision을 한 사람에게 맡기고 peer review를 생략함",
        "production deployment 후까지 image vulnerability를 숨김",
        "Pod manifest와 보안 finding을 일찍 review하고 rollout 전에 remediation을 추적함",
        "RBAC와 NetworkPolicy 변경을 application delivery와 무관하게 취급함"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Early manifest review and tracked remediation catch workload, RBAC, and network risks before they become deployed exposure.",
      "ko": "manifest를 일찍 review하고 remediation을 추적하면 workload, RBAC와 network risk가 배포된 노출로 이어지기 전에 발견됩니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-264",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "API server request path · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which component authenticates and authorizes requests before they reach most Kubernetes resources?",
      "ko": "대부분의 Kubernetes resource에 도달하기 전에 request를 authentication하고 authorization하는 component는 무엇입니까?"
    },
    "choices": {
      "en": [
        "kube-apiserver",
        "kubelet",
        "kube-proxy",
        "etcd"
      ],
      "ko": [
        "kube-apiserver",
        "kubelet",
        "kube-proxy",
        "etcd"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "kube-apiserver is the central HTTP API endpoint and invokes authentication, authorization, and admission for requests.",
      "ko": "kube-apiserver는 중앙 HTTP API endpoint이며 request에 authentication, authorization과 admission을 적용합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-265",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "API server exposure · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What is the security effect of exposing the Kubernetes API server directly to the public Internet?",
      "ko": "Kubernetes API server를 공개된 Internet에 직접 노출하면 어떤 보안 효과가 있습니까?"
    },
    "choices": {
      "en": [
        "It provides authentication automatically without configuring an identity provider",
        "It enlarges the attack surface and requires tightly controlled authenticated access",
        "It removes the need for API authorization because TLS encrypts traffic",
        "It confines API access to the cluster network even when the endpoint is public"
      ],
      "ko": [
        "identity provider를 configure하지 않아도 authentication을 자동 제공함",
        "attack surface가 커지고 엄격히 통제된 authenticated access가 필요해짐",
        "TLS가 traffic을 encryption하므로 API authorization이 필요 없어짐",
        "endpoint가 공개되어 있어도 API access를 cluster network로 제한함"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "A public endpoint can be scanned and attacked, so network restriction, strong authentication, authorization, and auditing remain important.",
      "ko": "공개된 endpoint는 scan과 attack을 받을 수 있으므로 network restriction, 강한 authentication, authorization과 auditing이 중요합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-266",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "API server authorization · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which API-server control limits which HTTP verbs a principal may perform on a resource?",
      "ko": "principal이 resource에 수행할 수 있는 HTTP verb를 제한하는 API-server control은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Authentication of a principal",
        "Admission policy before an object is persisted",
        "Authorization policy for permitted verbs and resources",
        "Audit logging of the API request"
      ],
      "ko": [
        "principal authentication",
        "object가 persisted되기 전의 admission policy",
        "허용된 verb와 resource에 대한 authorization policy",
        "API request의 감사 로깅"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Authorization decides whether an authenticated identity may perform an operation on a resource.",
      "ko": "authorization은 authenticated identity가 resource에 operation을 수행할 수 있는지 결정합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-267",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "API server TLS · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Why should a Kubernetes API server use TLS for client connections?",
      "ko": "Kubernetes API server가 client connection에 TLS를 사용해야 하는 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "To reveal Secrets to any authenticated client",
        "To change scheduler placement decisions",
        "To encrypt traffic while leaving endpoint authentication unverified",
        "To protect confidentiality and integrity in transit and authenticate the endpoint"
      ],
      "ko": [
        "모든 authenticated client에 Secret을 공개함",
        "scheduler placement decision을 변경함",
        "endpoint authentication을 확인하지 않고 traffic만 encryption함",
        "전송 중 confidentiality와 integrity를 보호하고 endpoint를 authenticate하기 위해"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "TLS protects client traffic in transit and lets the client authenticate the API endpoint. It does not make Secrets readable, accelerate scheduling, or replace RBAC.",
      "ko": "TLS는 client traffic을 전송 중 보호하고 client가 API endpoint를 확인하게 합니다. TLS는 Secret을 공개하거나 scheduling을 빠르게 하지 않으며 RBAC를 대신하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-268",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "API admission · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What is the security purpose of API-server admission control?",
      "ko": "API-server admission control의 보안 목적은 무엇입니까?"
    },
    "choices": {
      "en": [
        "To validate or mutate requests after authentication and authorization but before persistence",
        "To run one application process on every node",
        "To replace backup and recovery procedures",
        "To allocate cloud addresses before authorization"
      ],
      "ko": [
        "authentication과 authorization 후 persistence 전에 request를 validate하거나 mutate함",
        "모든 node에서 하나의 application process를 실행함",
        "backup과 recovery procedure를 대체함",
        "authorization 전에 cloud address를 할당함"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Admission runs after authentication and authorization but before persistence, where it can validate or mutate an accepted request. It is not a node process, backup system, or cloud IP allocator.",
      "ko": "admission은 authentication과 authorization 후 persistence 전에 실행되어 request를 validate하거나 mutate합니다. node process 실행, backup 대체와 cloud IP 할당을 담당하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-269",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Controller Manager · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which component reconciles desired resource state and creates or updates dependent objects?",
      "ko": "desired resource state를 조정하고 dependent object를 생성하거나 update하는 component는 무엇입니까?"
    },
    "choices": {
      "en": [
        "kube-apiserver validates and persists requests",
        "kube-scheduler",
        "kubelet realizes Pod state on its assigned node",
        "etcd stores state but does not reconcile desired resources"
      ],
      "ko": [
        "kube-apiserver는 request를 validate하고 persist함",
        "kube-scheduler",
        "kubelet은 assigned node에서 Pod state를 실현함",
        "etcd는 state를 저장하지만 desired resource를 reconcile하지 않음"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The scheduler selects a suitable node using resource and placement constraints; it does not reconcile objects, run containers, or store cluster state.",
      "ko": "scheduler는 resource와 placement constraint를 바탕으로 적합한 node를 선택합니다. object reconciliation, container 실행과 cluster state 저장은 scheduler의 역할이 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-270",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Controller Manager credentials · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Why should controller-manager credentials be limited to the controllers they operate?",
      "ko": "controller-manager credential을 운영하는 controller에 제한해야 하는 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "It makes every Pod use host networking",
        "It prevents controllers from operating at all",
        "A compromised controller should not gain unrelated cluster-wide powers",
        "It turns off reconciliation for safety"
      ],
      "ko": [
        "모든 Pod가 host networking을 사용하게 함",
        "controller가 전혀 operate하지 못하게 함",
        "침해된 controller가 무관한 cluster-wide 권한을 얻지 않게 하기 위해",
        "안전을 위해 reconciliation을 끔"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Limiting controller credentials narrows the blast radius if one controller is compromised. It does not disable reconciliation or require host networking.",
      "ko": "controller credential을 제한하면 controller 하나가 침해되어도 피해 범위가 줄어듭니다. 이 설정은 reconciliation을 끄거나 host networking을 요구하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-271",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Scheduler role · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What does a Kubernetes scheduler primarily decide?",
      "ko": "Kubernetes scheduler가 주로 결정하는 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "The response body returned by a Service",
        "The image contents selected by a registry",
        "The encryption key used by etcd",
        "A suitable node for an unscheduled Pod"
      ],
      "ko": [
        "Service가 반환하는 response body",
        "registry가 선택한 image 콘텐츠",
        "etcd가 사용하는 encryption key",
        "schedule되지 않은 Pod에 적합한 node"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "The scheduler binds an unscheduled Pod to a node that satisfies its requirements. Service responses, image contents, and etcd keys are managed by other components.",
      "ko": "scheduler는 요구 조건을 만족하는 node에 schedule되지 않은 Pod를 배정합니다. Service response, image content과 etcd key는 다른 component가 관리합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-272",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Scheduler placement policy · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which scheduler input can keep a sensitive workload away from nodes without the required label?",
      "ko": "필요한 label이 없는 node에서 sensitive workload를 멀리하게 하는 scheduler input은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Node affinity or node selector",
        "Taints and tolerations alone",
        "Pod topology spread constraints alone",
        "Pod priority alone"
      ],
      "ko": [
        "Node affinity 또는 node selector",
        "Taints와 tolerations만",
        "Pod topology spread constraint만",
        "Pod priority만"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Node affinity and node selectors constrain placement using node labels. Taints, topology spread, and priority influence scheduling differently but do not express this required-label match in the same way.",
      "ko": "Node affinity와 node selector는 node label을 사용해 배치를 제한합니다. taint, topology spread와 priority도 scheduling에 영향을 주지만 required-label match를 같은 방식으로 표현하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-273",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Scheduler taints · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "How can taints and tolerations support component security?",
      "ko": "taint와 toleration은 component 보안를 어떻게 지원합니까?"
    },
    "choices": {
      "en": [
        "A taint encrypts node storage",
        "A taint repels Pods unless their toleration permits placement",
        "A toleration grants cluster-admin",
        "A taint signs image artifacts"
      ],
      "ko": [
        "taint가 node storage를 encryption함",
        "toleration이 placement를 허용하지 않는 한 taint가 Pod를 밀어냄",
        "toleration이 cluster-admin을 grant함",
        "taint가 image artifact에 sign함"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "A taint repels Pods from a node unless a matching toleration permits scheduling. Taints do not encrypt storage, grant API permissions, or sign images.",
      "ko": "taint는 일치하는 toleration이 배치를 허용하지 않는 한 node에서 Pod를 밀어냅니다. taint는 storage를 encryption하거나 API 권한을 grant하고 image에 sign하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-274",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Kubelet role · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which kubelet behavior is security-relevant when a PodSpec changes?",
      "ko": "PodSpec가 바뀔 때 보안와 관련된 kubelet 동작은 무엇입니까?"
    },
    "choices": {
      "en": [
        "It publishes node files to the Internet",
        "It changes RBAC in every namespace",
        "It asks the container runtime to realize the assigned Pod and reports status to the API server",
        "It edits registry metadata directly"
      ],
      "ko": [
        "node file을 Internet에 publish함",
        "모든 namespace의 RBAC를 변경함",
        "할당된 Pod를 실현하도록 container runtime에 요청하고 API server에 status를 보고함",
        "registry metadata를 직접 edit함"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "The kubelet asks the runtime to create the assigned Pod containers and reports their status to the API server. It does not publish the node filesystem, change RBAC globally, or edit registry metadata.",
      "ko": "kubelet은 runtime에 할당된 Pod container 생성을 요청하고 status를 API server에 보고합니다. node filesystem 공개, global RBAC 변경과 registry metadata 편집은 kubelet의 역할이 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-275",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Kubelet endpoint · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What is a safer kubelet configuration for its read-only endpoint?",
      "ko": "kubelet의 read-only endpoint에 대한 더 안전한 구성은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Allow anonymous administrative commands",
        "Expose it without transport protection",
        "Use the endpoint as an image registry",
        "Disable unauthenticated read-only access and require authenticated, authorized requests"
      ],
      "ko": [
        "anonymous administrative command를 허용함",
        "transport protection 없이 노출함",
        "endpoint를 image registry로 사용함",
        "unauthenticated read-only access를 비활성화하고 authenticated·authorized request를 요구함"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Disabling the unauthenticated read-only kubelet endpoint prevents anonymous clients from obtaining node information or invoking an exposed endpoint. The safer configuration requires authenticated and authorized access.",
      "ko": "unauthenticated read-only kubelet endpoint를 끄면 anonymous client가 node 정보를 얻거나 노출된 endpoint를 호출하지 못합니다. 안전한 설정은 authentication과 authorization을 요구합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-276",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Kubelet Pod security · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which kubelet setting helps prevent a container process from gaining privileges through set-user-ID binaries?",
      "ko": "set-user-ID binary를 통해 container process가 privilege를 얻지 못하게 하는 kubelet/Pod setting은 무엇입니까?"
    },
    "choices": {
      "en": [
        "allowPrivilegeEscalation: false",
        "hostPID: true",
        "privileged: true",
        "hostPath: /"
      ],
      "ko": [
        "allowPrivilegeEscalation: false",
        "hostPID: true",
        "privileged: true",
        "hostPath: /"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "allowPrivilegeEscalation: false enables no_new_privs for the container process; the other settings expand host access.",
      "ko": "allowPrivilegeEscalation: false는 container process에 no_new_privs를 적용하며 나머지 setting은 host access를 확장합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-277",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Container runtime interface · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What does a CRI-compatible container runtime provide to the kubelet?",
      "ko": "CRI 호환 container runtime은 kubelet에 무엇을 제공합니까?"
    },
    "choices": {
      "en": [
        "A control-plane API replacement",
        "An interface for creating and managing Pod containers and their images",
        "A mechanism that edits RBAC policy globally",
        "A cloud billing interface"
      ],
      "ko": [
        "control-plane API replacement",
        "Pod container와 image를 생성하고 관리하는 interface",
        "RBAC policy를 globally edit하는 mechanism",
        "cloud billing interface"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "CRI gives the kubelet a runtime interface for creating and managing Pod containers and images. It is not a replacement API server, global RBAC editor, or billing interface.",
      "ko": "CRI는 kubelet이 Pod container와 image를 생성·관리하도록 runtime interface를 제공합니다. CRI는 API server 대체물, global RBAC editor나 billing interface가 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-278",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Runtime process identity · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Why is running a container as root risky on a shared node?",
      "ko": "shared node에서 container를 root로 실행하는 것이 위험한 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Root automatically encrypts the node",
        "Root prevents file access",
        "A runtime or kernel escape could give the process greater host impact",
        "Root prevents network connections"
      ],
      "ko": [
        "root가 node를 자동 encryption함",
        "root가 file access를 방지함",
        "runtime 또는 kernel escape가 process에 더 큰 host impact를 줄 수 있기 때문",
        "root가 network connection을 방지함"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "A root process has a larger starting privilege set, so a runtime or kernel escape can expose more of the host. Root does not encrypt the node, prevent file access, or block networking.",
      "ko": "root process는 더 큰 기본 권한을 가지므로 runtime이나 kernel escape가 발생하면 host 영향이 커질 수 있습니다. root가 node를 encryption하거나 file access와 network를 차단하지는 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-279",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Runtime image verification · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which runtime practice reduces the chance of using a tampered image?",
      "ko": "변조된 image를 사용할 가능성을 줄이는 runtime practice는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Run every image with privileged: true",
        "Always pull by an unpinned mutable tag",
        "Disable all image metadata",
        "Verify a trusted image digest or signature before starting it"
      ],
      "ko": [
        "모든 image를 privileged: true로 실행함",
        "항상 pin하지 않은 mutable tag로 pull함",
        "모든 image metadata를 비활성화함",
        "시작 전에 trusted image digest 또는 signature를 검증함"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Digest or signature verification checks content or provenance before execution; mutable tags alone do not provide that assurance.",
      "ko": "digest 또는 signature verification은 실행 전에 콘텐츠나 provenance를 확인하며 mutable tag만으로는 보장할 수 없습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-280",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Runtime socket protection · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What is the security benefit of separating the container runtime socket from application containers?",
      "ko": "container runtime socket을 application container와 분리하는 보안 이점은 무엇입니까?"
    },
    "choices": {
      "en": [
        "A compromised application is less likely to control the runtime and launch privileged containers",
        "It grants the application cluster-admin automatically",
        "It removes all image vulnerabilities",
        "It disables scheduler constraint checks"
      ],
      "ko": [
        "침해된 application이 runtime을 제어하고 privileged container를 실행할 가능성이 낮아짐",
        "application에 cluster-admin을 자동 grant함",
        "모든 image vulnerability를 제거함",
        "scheduler constraint check를 disable함"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Keeping the runtime socket away from application containers reduces the chance that a compromised process can issue runtime commands to launch a privileged container. It does not remove image vulnerabilities or alter scheduler checks.",
      "ko": "runtime socket을 application container에서 분리하면 침해된 process가 runtime command를 실행해 privileged container를 시작할 가능성이 줄어듭니다. image vulnerability를 없애거나 scheduler check를 바꾸지는 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-281",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Kube-proxy datapath · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which component programs node networking rules so Service virtual IP traffic reaches backend endpoints?",
      "ko": "Service virtual IP traffic이 backend endpoint에 도달하도록 node networking rule을 구성하는 component는 무엇입니까?"
    },
    "choices": {
      "en": [
        "kube-scheduler",
        "kube-proxy",
        "etcd",
        "kube-controller-manager"
      ],
      "ko": [
        "kube-scheduler",
        "kube-proxy",
        "etcd",
        "kube-controller-manager"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "kube-proxy watches Services and endpoints and configures the node datapath; it is not the API authorization component.",
      "ko": "kube-proxy는 Service와 endpoint를 watch하고 node datapath를 구성하며 API authorization component는 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-282",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Kube-proxy configuration · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Why should access to kube-proxy configuration and host networking be restricted?",
      "ko": "kube-proxy configuration과 host networking access를 제한해야 하는 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "It only changes Pod placement labels",
        "It changes only container logging verbosity",
        "Changes can redirect or expose Service traffic on the node",
        "It rotates ServiceAccount credentials automatically"
      ],
      "ko": [
        "Pod placement label만 변경함",
        "container logging verbosity만 변경함",
        "변경으로 node의 Service traffic을 redirect하거나 노출할 수 있기 때문",
        "ServiceAccount credential을 자동으로 rotate함"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "The node datapath influences how traffic reaches Services; unauthorized changes can bypass intended routing or policy.",
      "ko": "node datapath는 traffic이 Service에 도달하는 방식을 좌우하므로 unauthorized change는 routing이나 policy를 우회할 수 있습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-283",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Pod network namespace · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which statement about hostNetwork is correct for a Pod?",
      "ko": "Pod의 hostNetwork에 대한 올바른 설명은 무엇입니까?"
    },
    "choices": {
      "en": [
        "It isolates the Pod to localhost only",
        "It gives the Pod a separate guest kernel",
        "It encrypts every Service connection",
        "It places the Pod in the node network namespace and can increase exposure"
      ],
      "ko": [
        "Pod를 localhost에만 격리함",
        "Pod에 별도의 guest kernel을 제공함",
        "모든 Service connection을 encryption함",
        "Pod를 node network namespace에 배치하여 노출을 늘릴 수 있음"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "hostNetwork places the Pod in the node's network namespace, so node-bound ports and traffic may become reachable. It does not create a VM, encrypt connections, or limit the Pod to localhost.",
      "ko": "hostNetwork는 Pod를 node network namespace에 배치하므로 node port와 traffic에 접근할 가능성이 커집니다. VM을 만들거나 connection을 encryption하고 localhost로 제한하지는 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-284",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Pod securityContext identity · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is the primary security property of a Pod securityContext setting runAsNonRoot?",
      "ko": "Pod 보안Context의 runAsNonRoot setting의 주요 보안 property는 무엇입니까?"
    },
    "choices": {
      "en": [
        "It rejects execution when the resolved user would be root",
        "It makes the Pod run on a non-root node",
        "It gives the process every Linux capability",
        "It enables hostPID"
      ],
      "ko": [
        "resolved user가 root이면 실행을 거부함",
        "Pod가 non-root node에서 실행되게 함",
        "process에 모든 Linux capability를 부여함",
        "hostPID를 활성화함"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "runAsNonRoot expresses that the container must not run as UID 0; it concerns process identity, not node selection.",
      "ko": "runAsNonRoot는 container가 UID 0으로 실행되지 않아야 함을 표현하며 node selection과는 다릅니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-285",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Host filesystem mount · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Why should a Pod avoid mounting the host root filesystem read-write?",
      "ko": "Pod가 host root filesystem을 read-write로 mount하지 않아야 하는 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "It prevents the container from reading its own root filesystem",
        "A compromised process could alter node binaries, configuration, or credentials",
        "It disables Service discovery",
        "It is required for every non-root process"
      ],
      "ko": [
        "container가 자신의 root filesystem을 읽지 못하게 함",
        "침해된 process가 node binary, configuration 또는 credential을 변경할 수 있기 때문",
        "Service discovery를 disable함",
        "모든 non-root process에 필요함"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "A read-write host root mount can let a compromised process alter node binaries, configuration, or credentials outside normal volume isolation. It is not required for non-root processes and does not disable Service discovery.",
      "ko": "read-write host root mount는 침해된 process가 일반적인 volume isolation 밖의 node binary·configuration·credential을 바꾸게 할 수 있습니다. non-root process에 필요하지 않으며 Service discovery를 끄지도 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-286",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Etcd data protection · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What does etcd store that makes its protection critical?",
      "ko": "etcd가 저장하므로 보호가 중요한 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Only controller-manager cache",
        "Only application logs on worker nodes",
        "Kubernetes API state, including configuration and often sensitive objects",
        "Only image-registry metadata"
      ],
      "ko": [
        "controller-manager cache만",
        "worker node의 application log만",
        "configuration과 종종 sensitive object를 포함한 Kubernetes API state",
        "image registry metadata만"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "etcd is the backing store for Kubernetes API data; unauthorized read or write can expose Secrets or alter cluster state.",
      "ko": "etcd는 Kubernetes API data의 backing store이며 unauthorized read 또는 write는 Secret을 노출하거나 cluster state를 변경할 수 있습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-287",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Etcd encryption at rest · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which control protects etcd data if its storage disk is stolen?",
      "ko": "etcd storage disk를 도난당했을 때 data를 보호하는 control은 무엇입니까?"
    },
    "choices": {
      "en": [
        "TLS protecting data in transit",
        "RBAC authorization for API access",
        "Audit logging of access and changes",
        "Encryption at rest with carefully protected encryption keys"
      ],
      "ko": [
        "transit 중 data를 보호하는 TLS",
        "API access를 위한 RBAC authorization",
        "access와 변경의 감사 로깅",
        "신중하게 보호된 encryption key를 사용하는 at-rest encryption"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Encryption at rest reduces disclosure from copied storage, but key access and API authorization still need protection.",
      "ko": "at-rest encryption은 복사된 storage에서의 disclosure를 줄이지만 key access와 API authorization도 보호해야 합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-288",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Etcd TLS · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Why should etcd client and peer traffic use authenticated TLS?",
      "ko": "etcd client와 peer traffic에 authenticated TLS를 사용해야 하는 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "To protect data in transit and prevent unauthorized members or clients from impersonating trusted endpoints",
        "To schedule Pods without a scheduler",
        "To remove the need for tested backups",
        "To grant every controller read access"
      ],
      "ko": [
        "전송 중 data를 보호하고 unauthorized member 또는 client가 trusted endpoint를 impersonate하지 못하게 함",
        "scheduler 없이 Pod를 schedule함",
        "tested backup의 필요성을 제거함",
        "모든 controller에 read access를 grant함"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Authenticated TLS encrypts etcd client and peer traffic and verifies that the other endpoint is an authorized member. It does not schedule Pods, replace backups, or grant every controller read access.",
      "ko": "authenticated TLS는 etcd client와 peer traffic을 encryption하고 상대 endpoint가 authorized member인지 확인합니다. Pod를 schedule하거나 backup을 대신하고 모든 controller에 read access를 주지는 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-289",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Etcd backup · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is a sensible etcd backup security practice?",
      "ko": "etcd backup에 대한 합리적인 보안 practice는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Publish backups to simplify troubleshooting",
        "Encrypt backups, restrict access, and test restoration procedures",
        "Store keys beside the unencrypted backup",
        "Assume a backup cannot contain Secrets"
      ],
      "ko": [
        "troubleshooting을 단순화하려고 backup을 publish함",
        "backup을 encryption하고 access를 제한하며 restoration procedure를 test함",
        "key를 unencrypted backup 옆에 저장함",
        "backup에 Secret이 포함될 수 없다고 가정함"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Backups can contain the full cluster state, so confidentiality, integrity, access control, and recovery testing all matter.",
      "ko": "backup에는 전체 cluster state가 포함될 수 있으므로 confidentiality, integrity, access control과 recovery test가 모두 중요합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-290",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Container networking · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What does a CNI plugin provide in relation to Pod security?",
      "ko": "CNI plugin은 Pod 보안와 관련하여 무엇을 제공합니까?"
    },
    "choices": {
      "en": [
        "An artifact signing key",
        "An API-server audit policy",
        "Pod networking and, when supported, enforcement of NetworkPolicy",
        "An etcd encryption key"
      ],
      "ko": [
        "artifact signing key",
        "API-server 감사 policy",
        "Pod networking과 지원하는 경우 NetworkPolicy enforcement",
        "etcd encryption key"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "A CNI provides Pod networking and, when implemented, enforces NetworkPolicy in the data path. Signing keys, audit policies, and etcd encryption keys are separate controls.",
      "ko": "CNI는 Pod networking을 제공하고 구현된 경우 data path에서 NetworkPolicy를 enforce합니다. signing key, audit policy와 etcd encryption key는 별도의 control입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-291",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "NetworkPolicy enforcement · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "A NetworkPolicy exists but the CNI does not support policy enforcement. What should the operator expect?",
      "ko": "NetworkPolicy가 있지만 CNI가 policy enforcement를 지원하지 않으면 무엇을 예상해야 합니까?"
    },
    "choices": {
      "en": [
        "etcd enforces the object automatically",
        "The API server blocks every packet",
        "The scheduler encrypts the traffic",
        "The object may exist without restricting traffic; enforcement depends on the network plugin"
      ],
      "ko": [
        "etcd가 object를 자동 enforce함",
        "API server가 모든 packet을 block함",
        "scheduler가 traffic을 encryption함",
        "object는 존재해도 traffic을 제한하지 않을 수 있으며 enforcement는 network plugin에 달려 있음"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "A NetworkPolicy object can be stored even when the CNI ignores enforcement, so packets may remain unrestricted. The API server and scheduler do not automatically filter or encrypt data-plane traffic.",
      "ko": "CNI가 enforcement를 지원하지 않으면 NetworkPolicy object는 저장되어도 packet이 제한되지 않을 수 있습니다. API server와 scheduler가 data-plane traffic을 자동 filtering하거나 encryption하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/network-policies/"
  },
  {
    "id": "local-292",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Container network segmentation · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which design limits lateral movement between two application tiers?",
      "ko": "두 application tier 사이의 lateral movement를 제한하는 설계는 무엇입니까?"
    },
    "choices": {
      "en": [
        "A default-deny NetworkPolicy with explicit allowed paths",
        "A shared hostPath between both tiers",
        "hostNetwork for every Pod",
        "One administrator ServiceAccount for both tiers"
      ],
      "ko": [
        "명시적으로 허용한 경로가 있는 default-deny NetworkPolicy",
        "두 tier가 shared hostPath를 사용함",
        "모든 Pod에 hostNetwork를 사용함",
        "두 tier가 하나의 관리자 ServiceAccount를 사용함"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A default-deny policy blocks traffic to selected Pods unless an applicable policy explicitly allows the path. Shared host paths, host networking, and one admin identity increase rather than reduce cross-tier movement.",
      "ko": "default-deny policy는 적용 가능한 policy가 경로를 명시적으로 허용하지 않는 한 선택된 Pod로의 traffic을 막습니다. shared hostPath, hostNetwork와 단일 admin identity는 tier 간 이동 위험을 줄이지 않고 키웁니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-293",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Network policy directions · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which traffic direction must a policy consider when protecting a database Pod?",
      "ko": "database Pod를 보호할 때 policy가 고려해야 하는 traffic 방향은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Only ingress to the database",
        "Both database ingress and client egress for the intended flow",
        "Only egress from the database",
        "Neither direction when the Service is a ClusterIP"
      ],
      "ko": [
        "database로의 ingress만",
        "의도한 flow를 위한 database ingress와 client egress 모두",
        "database에서 나가는 egress만",
        "Service가 clusterIP이면 어느 방향도 아님"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "A policy must match the actual flow: client egress and database ingress may both need to be allowed, while unrelated paths remain denied.",
      "ko": "policy는 실제 flow에 맞아야 합니다. client egress와 database ingress를 허용하고 무관한 경로는 deny할 수 있습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-294",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Client security tokens · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What is the security value of a Kubernetes ServiceAccount token audience and expiration?",
      "ko": "Kubernetes ServiceAccount token의 audience와 expiration이 주는 보안 가치는 무엇입니까?"
    },
    "choices": {
      "en": [
        "They grant access to every namespace",
        "They turn the token into an image",
        "They limit where and how long a token is accepted",
        "They remove the need for authorization"
      ],
      "ko": [
        "모든 namespace에 access를 grant함",
        "token을 image로 바꿈",
        "token이 어디서 얼마나 오래 허용되는지 제한함",
        "authorization의 필요성을 제거함"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Audience restricts which recipient may accept a ServiceAccount token, and expiration limits its lifetime, reducing replay scope. These claims do not grant namespaces or replace authorization.",
      "ko": "audience는 ServiceAccount token을 받아들일 recipient를 제한하고 expiration은 lifetime을 줄여 replay 범위를 낮춥니다. 이 claim은 namespace access를 주거나 authorization을 대신하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-295",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Client credential handling · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which client practice best reduces accidental exposure of Kubernetes credentials?",
      "ko": "Kubernetes credential의 우발적 노출을 가장 잘 줄이는 client practice는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Share one permanent token with every developer",
        "Commit admin kubeconfig files to a public repository",
        "Paste tokens into issue titles",
        "Use protected kubeconfig files and avoid embedding tokens in scripts or chat"
      ],
      "ko": [
        "모든 developer와 하나의 permanent token을 공유함",
        "admin kubeconfig file을 공개된 repository에 commit함",
        "issue title에 token을 붙여넣음",
        "보호된 kubeconfig file을 사용하고 script나 chat에 token을 넣지 않음"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Kubeconfig credentials should be protected like passwords and rotated when exposed; public copies make cluster takeover easier.",
      "ko": "kubeconfig credential은 password처럼 보호하고 노출되면 rotate해야 하며 공개된 copy는 cluster takeover를 쉽게 합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-296",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Client identity · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Why should kubectl clients use a named low-privilege identity instead of a shared admin account?",
      "ko": "kubectl client가 shared admin account 대신 named low-privilege identity를 사용해야 하는 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "It provides least privilege and attributable audit records",
        "They remove the need for authorization",
        "They prevent API request logging",
        "They give every user identical access"
      ],
      "ko": [
        "least privilege와 추적 가능한 audit record를 제공함",
        "authorization의 필요성을 제거함",
        "API request logging을 방지함",
        "모든 user에게 동일한 access를 줌"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A named low-privilege identity limits permissions and lets audit events attribute actions to a person or workload. A shared admin account grants broad access and obscures who performed the action.",
      "ko": "이름이 있는 low-privilege identity는 권한을 제한하고 audit event가 action을 사람이나 workload에 귀속하게 합니다. shared admin account는 권한이 넓고 누가 action을 수행했는지 흐리게 합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-297",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Storage security · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which storage choice is safer for a sensitive Kubernetes volume?",
      "ko": "sensitive Kubernetes volume에 더 안전한 storage 선택은 무엇입니까?"
    },
    "choices": {
      "en": [
        "An unencrypted public file share mounted by every namespace",
        "A provider with encryption at rest and restricted volume access",
        "A hostPath writable by all Pods",
        "A temporary directory with no access policy"
      ],
      "ko": [
        "모든 namespace가 mount하는 암호화되지 않은 공개 file share",
        "at-rest encryption과 제한된 volume access를 제공하는 provider",
        "모든 Pod가 write하는 hostPath",
        "access policy가 없는 temporary directory"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Storage controls should protect data at rest and restrict which workloads can mount it; a volume type alone is not sufficient.",
      "ko": "storage control은 at rest data를 보호하고 어떤 workload가 mount할지 제한해야 하며 volume type만으로 충분하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/storage/storage-classes/"
  },
  {
    "id": "local-298",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Storage encryption keys · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What should a storage encryption key policy include?",
      "ko": "storage encryption key policy에 포함해야 할 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Anonymous read access to simplify debugging",
        "A key copied into every image layer",
        "Restricted key access, rotation, and a recovery process",
        "A promise that keys never need rotation"
      ],
      "ko": [
        "debugging을 단순화하는 anonymous read access",
        "모든 image layer에 복사한 key",
        "제한된 key access, rotation과 recovery process",
        "key가 절대 rotation될 필요 없다는 약속"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Key management is part of data protection: access, lifecycle, and recovery must be governed separately from volume claims.",
      "ko": "key management는 data protection의 일부이며 access, lifecycle과 recovery를 volume claim과 별도로 관리해야 합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/storage/storage-classes/"
  },
  {
    "id": "local-299",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "HostPath storage · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Why can a hostPath volume be a security concern?",
      "ko": "hostPath volume이 보안 concern이 될 수 있는 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "It is always enforced by RBAC alone",
        "It always creates an encrypted remote disk",
        "It cannot contain sensitive files",
        "It gives a Pod access to selected host filesystem paths outside normal volume isolation"
      ],
      "ko": [
        "항상 RBAC만으로 enforce됨",
        "항상 encrypted remote disk를 생성함",
        "sensitive file을 포함할 수 없음",
        "일반적인 volume isolation 밖에서 Pod가 선택한 host filesystem path에 접근하게 함"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "hostPath exposes selected node filesystem paths to the Pod, bypassing ordinary volume isolation and potentially exposing credentials or binaries. RBAC alone does not remove that filesystem access.",
      "ko": "hostPath는 선택된 node filesystem path를 Pod에 노출해 일반적인 volume isolation을 우회하고 credential이나 binary를 노출할 수 있습니다. RBAC만으로 해당 filesystem access가 제거되지는 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-300",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Storage backup integrity · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which backup property helps detect tampering with a Kubernetes storage backup?",
      "ko": "Kubernetes storage backup의 tampering을 감지하는 데 도움이 되는 property는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Integrity verification such as a cryptographic checksum with controlled metadata",
        "Restricting who may read or delete the backup",
        "A retention policy that keeps backup versions for a defined period",
        "An offsite copy in a separate failure domain"
      ],
      "ko": [
        "통제된 metadata와 함께 cryptographic checksum 같은 integrity verification",
        "backup을 read하거나 delete할 수 있는 주체를 제한함",
        "정해진 기간 backup version을 보존하는 retention policy",
        "별도 failure domain에 offsite copy를 보관함"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "An integrity check can reveal changed backup content; access control and encryption address additional threats.",
      "ko": "integrity check는 변경된 backup 콘텐츠를 드러낼 수 있으며 access control과 encryption은 추가 threat를 다룹니다."
    },
    "ref": "https://csrc.nist.gov/pubs/sp/1800/25/final"
  },
  {
    "id": "local-301",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "API server validation · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which component validates object schemas before persistence?",
      "ko": "persistence 전에 object schema를 validate하는 component는 무엇입니까?"
    },
    "choices": {
      "en": [
        "kubelet validates and runs the local container",
        "kube-apiserver",
        "kube-proxy programs Service routing",
        "etcd persists accepted API state after validation"
      ],
      "ko": [
        "kubelet은 local container를 validate하고 실행함",
        "kube-apiserver",
        "kube-proxy는 Service routing을 program함",
        "etcd는 validation 후 accepted API state를 persist함"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The kube-apiserver validates the API request and object schema before accepted state is persisted. Kubelet, kube-proxy, and etcd perform local execution, networking, or storage roles instead.",
      "ko": "kube-apiserver는 accepted state가 persist되기 전에 API request와 object schema를 검증합니다. kubelet, kube-proxy와 etcd는 각각 local 실행·networking·storage 역할을 담당합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-302",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Pod capabilities · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What is the security role of Pod securityContext capabilities?",
      "ko": "Pod 보안Context capability의 보안 역할은 무엇입니까?"
    },
    "choices": {
      "en": [
        "They replace the API-server certificate",
        "They select a cloud region",
        "They add or remove specific Linux privileges from the process",
        "They decide which Service receives traffic"
      ],
      "ko": [
        "API-server certificate를 대체함",
        "cloud region을 선택함",
        "process에서 특정 Linux privilege를 추가하거나 제거함",
        "어떤 Service가 traffic을 받을지 결정함"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Capabilities add or drop specific Linux privileges for a process, allowing a workload to run with a smaller privilege set. They do not replace certificates, select regions, or choose Service traffic.",
      "ko": "capability는 process의 특정 Linux privilege를 추가하거나 제거해 workload의 privilege set을 줄일 수 있습니다. certificate를 대체하거나 region과 Service traffic을 선택하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-303",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Kubelet probes · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which kubelet responsibility helps detect a compromised or unhealthy container?",
      "ko": "침해되었거나 unhealthy한 container를 감지하는 kubelet 책임은 무엇입니까?"
    },
    "choices": {
      "en": [
        "A policy record missing the relevant scope or review evidence",
        "Signing every registry image",
        "Changing cloud firewall rules",
        "Running configured probes and reporting container status"
      ],
      "ko": [
        "관련 범위나 검토 evidence가 빠진 policy record",
        "모든 registry image에 sign함",
        "cloud firewall rule을 변경함",
        "구성된 probe를 실행하고 container status를 보고함"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "The kubelet runs configured liveness and readiness probes and reports container status, giving operators signals about unhealthy behavior. Signing images and changing cloud firewall rules are separate controls.",
      "ko": "kubelet은 구성된 liveness·readiness probe를 실행하고 container status를 보고해 unhealthy behavior 신호를 제공합니다. image signing과 cloud firewall 변경은 별도의 control입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-304",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Runtime isolation · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which runtime isolation option can provide a stronger boundary than a process-only container?",
      "ko": "process-only container보다 강한 boundary를 제공할 수 있는 runtime 격리 option은 무엇입니까?"
    },
    "choices": {
      "en": [
        "A sandboxed or virtualized container runtime",
        "A standard process-isolated container runtime",
        "A Pod securityContext change without a runtime sandbox",
        "A NetworkPolicy applied to the Pod"
      ],
      "ko": [
        "sandboxed 또는 virtualized container runtime",
        "standard process-isolated container runtime",
        "runtime sandbox 없는 Pod 보안Context 변경",
        "Pod에 적용한 NetworkPolicy"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Sandboxed or virtualized runtimes can add a kernel or VM boundary, though their configuration and threat model still require review.",
      "ko": "sandboxed 또는 virtualized runtime은 kernel 또는 VM boundary를 추가할 수 있지만 configuration과 threat model을 검토해야 합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-305",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Client endpoint verification · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which API request should a client reject before sending because it targets an unexpected cluster?",
      "ko": "예상하지 않은 cluster를 대상으로 하므로 client가 보내기 전에 reject해야 하는 API request는 무엇입니까?"
    },
    "choices": {
      "en": [
        "A request using a named low-privilege identity",
        "A request whose kubeconfig server identity fails the trusted endpoint check",
        "A request sent over verified TLS",
        "A request to read a permitted resource"
      ],
      "ko": [
        "named low-privilege identity를 사용하는 request",
        "trusted endpoint check를 통과하지 못한 kubeconfig server identity의 request",
        "verified TLS로 보내는 request",
        "허용된 resource를 read하는 request"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Clients should verify the intended server and certificate context to avoid sending credentials to an impostor endpoint.",
      "ko": "client는 credential을 impostor endpoint에 보내지 않도록 의도한 server와 certificate context를 검증해야 합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-306",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Storage lifecycle · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Why should a Kubernetes storage class be reviewed for reclaim behavior?",
      "ko": "Kubernetes storage class의 reclaim behavior를 검토해야 하는 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Every reclaim mode encrypts data automatically",
        "Reclaim policy controls API authentication",
        "Deletion may remove backing data, while retention may preserve sensitive data that needs controlled cleanup",
        "Reclaim behavior selects a Pod security standard"
      ],
      "ko": [
        "모든 reclaim mode가 data를 자동 encryption함",
        "reclaim policy가 API authentication을 제어함",
        "deletion은 backing data를 제거할 수 있고 retention은 통제된 cleanup이 필요한 sensitive data를 보존할 수 있기 때문",
        "reclaim behavior가 Pod 보안 standard를 선택함"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "A reclaim policy determines whether deleting a claim can delete backing storage or retain it for controlled cleanup. It does not encrypt data, authenticate API requests, or select a Pod security profile.",
      "ko": "reclaim policy는 claim 삭제 시 backing storage를 함께 삭제할지 보존해 통제된 cleanup을 할지 결정합니다. data를 encryption하거나 API request를 authentication하고 Pod profile을 선택하지는 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/storage/storage-classes/"
  },
  {
    "id": "local-307",
    "exam": "kcsa",
    "domain": "Kubernetes Cluster Component Security",
    "subtopic": "Storage access authorization · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What should an operator verify before attaching a persistent volume to a new workload?",
      "ko": "새 workload에 persistent volume을 attach하기 전에 operator가 검증해야 하는 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "That the node has hostPID enabled",
        "Only that the Pod has a short name",
        "That every namespace can mount it read-write",
        "The workload identity and namespace are authorized for that volume"
      ],
      "ko": [
        "node가 hostPID를 enable했는지",
        "Pod name이 짧은지만",
        "모든 namespace가 read-write로 mount할 수 있는지",
        "workload identity와 namespace가 해당 volume에 authorization되었는지"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "The operator should verify that the workload identity and namespace are authorized to mount the volume, limiting data exposure to intended consumers. HostPID, a short name, or universal read-write access is not that authorization check.",
      "ko": "operator는 workload identity와 namespace가 volume mount 권한을 갖는지 확인해 data를 의도한 consumer로 제한해야 합니다. hostPID, 짧은 name과 모든 namespace의 read-write access는 authorization check가 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/storage/storage-classes/"
  },
  {
    "id": "local-308",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Standards · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which Pod Security Standard profile is the most restrictive?",
      "ko": "가장 엄격한 Pod 보안 Standard profile은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Restricted",
        "Baseline",
        "Privileged",
        "Unspecified"
      ],
      "ko": [
        "가장 강한 기본 제한을 적용하는 Restricted",
        "Baseline",
        "Privileged",
        "Unspecified"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Restricted applies the strongest built-in restrictions; Baseline prevents common privilege escalations and Privileged is largely unrestricted.",
      "ko": "Restricted는 가장 강한 기본 제한을 적용하고 Baseline은 흔한 privilege escalation을 막으며 Privileged는 거의 제한이 없습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/pod-security-standards/"
  },
  {
    "id": "local-309",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Admission modes · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "A Pod violates Baseline because it requests hostNetwork. Which PSA mode reports the violation without rejecting the Pod?",
      "ko": "Pod가 hostNetwork를 요청해 Baseline을 위반합니다. 거부하지 않고 violation을 report하는 PSA mode는 무엇입니까?"
    },
    "choices": {
      "en": [
        "enforce",
        "audit",
        "warn",
        "A custom mode that admits without reporting"
      ],
      "ko": [
        "enforce",
        "audit",
        "warn",
        "report 없이 admit하는 custom mode"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "PSA audit mode records a policy violation while still admitting the Pod. Enforce rejects it, warn reports to the submitting user, and a custom silent mode would not report the violation.",
      "ko": "PSA audit mode는 Pod를 admission하면서 policy violation을 기록합니다. enforce는 거부하고 warn은 제출 user에게 경고하며 silent custom mode는 violation을 보고하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/pod-security-standards/"
  },
  {
    "id": "local-310",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod Security Admission warn · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What does the PSA warn mode do for a non-conforming Pod?",
      "ko": "부합하지 않는 Pod에 PSA warn mode는 무엇을 합니까?"
    },
    "choices": {
      "en": [
        "It changes the Pod to Privileged",
        "It rejects the request like enforce mode",
        "It returns a warning to the submitting user while allowing admission",
        "It encrypts the Pod filesystem"
      ],
      "ko": [
        "Pod를 Privileged로 변경함",
        "enforce mode처럼 request를 reject함",
        "admission을 허용하면서 제출 user에게 warning을 반환함",
        "Pod filesystem을 encryption함"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Warn mode returns a warning to the submitting user but permits admission. Enforce rejects a violating request, while audit records the violation without changing the response.",
      "ko": "warn mode는 제출 user에게 warning을 반환하면서 admission을 허용합니다. enforce는 violation request를 거부하고 audit는 response를 바꾸지 않고 violation을 기록합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/pod-security-standards/"
  },
  {
    "id": "local-311",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "PSA enforcement scope · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "A namespace changes its PSA enforce label from baseline to restricted. What is the direct effect?",
      "ko": "namespace가 PSA enforce label을 baseline에서 Restricted로 바꿉니다. 직접적인 효과는 무엇입니까?"
    },
    "choices": {
      "en": [
        "All Pods become privileged",
        "Every existing Pod is deleted immediately",
        "Only audit records change",
        "Future admissions are checked against Restricted; existing Pods are not retroactively evicted by that label change"
      ],
      "ko": [
        "모든 Pod가 privileged가 됨",
        "모든 existing Pod가 즉시 삭제됨",
        "audit record만 변경됨",
        "향후 admission은 Restricted에 대해 check되며 label 변경만으로 existing Pod를 소급 eviction하지 않음"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Changing the enforce label applies Restricted checks to future admissions; it does not evict already-running Pods solely because the label changed. Existing Pods need a separate remediation decision.",
      "ko": "enforce label을 바꾸면 이후 admission에 Restricted check가 적용되지만 label 변경만으로 이미 실행 중인 Pod를 eviction하지 않습니다. Existing Pod에는 별도 remediation 판단이 필요합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/pod-security-admission/"
  },
  {
    "id": "local-312",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod security context · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which securityContext field removes all Linux capabilities from a container?",
      "ko": "container에서 모든 Linux capability를 제거하는 보안Context field는 무엇입니까?"
    },
    "choices": {
      "en": [
        "capabilities.drop: [\"ALL\"]",
        "allowPrivilegeEscalation: false",
        "privileged: true",
        "capabilities.add: [\"SYS_ADMIN\"]"
      ],
      "ko": [
        "capabilities.drop: [\"ALL\"]",
        "allowPrivilegeEscalation: false",
        "privileged: true",
        "capabilities.add: [\"SYS_ADMIN\"]"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "capabilities.drop: [\"ALL\"] removes the listed Linux capabilities; allowPrivilegeEscalation controls privilege gain but does not itself remove every capability.",
      "ko": "capabilities.drop: [\"ALL\"]은 나열된 Linux capability를 제거합니다. allowPrivilegeEscalation은 privilege gain을 제어하지만 모든 capability를 자체적으로 제거하지는 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-313",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Authentication mechanisms · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which authentication mechanism proves a client controls a certificate key pair?",
      "ko": "client가 certificate key pair를 제어함을 증명하는 authentication mechanism은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Bearer token authentication",
        "Client certificate authentication",
        "Webhook authentication",
        "ServiceAccount token authentication"
      ],
      "ko": [
        "Bearer token authentication",
        "Client certificate authentication",
        "Webhook authentication",
        "ServiceAccount token authentication"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The client proves possession of a private key corresponding to a trusted certificate; authorization still decides permitted actions.",
      "ko": "client는 trusted certificate에 대응하는 비공개 key를 소유함을 증명하고 authorization이 허용 action을 결정합니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/authentication/"
  },
  {
    "id": "local-314",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Authentication and authorization · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is the main difference between authentication and authorization?",
      "ko": "authentication과 authorization의 주요 차이는 무엇입니까?"
    },
    "choices": {
      "en": [
        "They are identical checks",
        "Authentication grants permissions and authorization identifies a person",
        "Authentication identifies a principal; authorization decides what it may do",
        "Authorization encrypts network traffic"
      ],
      "ko": [
        "동일한 check임",
        "authentication이 권한을 grant하고 authorization이 사람을 식별함",
        "authentication은 principal을 식별하고 authorization은 수행할 수 있는 일을 결정함",
        "authorization이 network traffic을 encryption함"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Authentication establishes which principal sent a request; authorization evaluates that principal's permitted actions. Encryption is provided by transport security, not by authorization.",
      "ko": "authentication은 request를 보낸 principal을 확인하고 authorization은 그 principal의 허용된 action을 판단합니다. encryption은 authorization이 아니라 transport security가 제공합니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/authentication/"
  },
  {
    "id": "local-315",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "ServiceAccount tokens · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Why are short-lived projected ServiceAccount tokens safer than legacy auto-created token Secrets?",
      "ko": "짧은 수명의 projected ServiceAccount token이 legacy auto-created token Secret보다 안전한 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "They contain no identity information",
        "They grant cluster-admin automatically",
        "The API server never checks them",
        "They reduce the replay window and avoid a long-lived Secret object by default"
      ],
      "ko": [
        "identity information을 포함하지 않음",
        "cluster-admin을 자동 grant함",
        "API server가 확인하지 않음",
        "replay window를 줄이고 기본적으로 장기 Secret object를 피함"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Projected ServiceAccount tokens expire sooner and are delivered without creating a long-lived token Secret by default, reducing replay exposure. They still carry identity and are checked by the API server.",
      "ko": "projected ServiceAccount token은 더 빨리 만료되고 기본적으로 장기 token Secret을 만들지 않아 replay 노출을 줄입니다. 그래도 identity를 포함하며 API server가 검증합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-316",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "API authentication · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which authentication choice is inappropriate for a production API server?",
      "ko": "production API server에 부적절한 authentication choice는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Anonymous access for arbitrary clients",
        "A managed identity provider with mapped groups",
        "Mutual TLS for trusted clients",
        "A carefully scoped ServiceAccount token"
      ],
      "ko": [
        "임의 client의 anonymous access",
        "group을 mapping한 managed identity provider",
        "trusted client의 mutual TLS",
        "신중하게 범위를 정한 ServiceAccount token"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Anonymous access removes reliable identity and should not be enabled for arbitrary production requests.",
      "ko": "anonymous access는 reliable identity를 없애므로 임의의 production request에 enable하지 않아야 합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-317",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "RBAC RoleBinding · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What does a RoleBinding scope when it binds a role to subjects?",
      "ko": "RoleBinding이 role을 subject에 binding할 때 범위는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Permissions from the referenced Role or ClusterRole, limited to resources in the RoleBinding namespace",
        "ClusterRole permissions in every namespace regardless of the binding",
        "Only network traffic between the subject and API server",
        "An explicit deny that removes permissions"
      ],
      "ko": [
        "참조한 Role 또는 clusterRole의 권한을 RoleBinding이 있는 namespace의 리소스에 한정해 부여한다",
        "binding과 관계없이 모든 namespace의 clusterRole 권한",
        "subject와 API server 사이 network traffic만",
        "권한을 제거하는 explicit deny"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A RoleBinding limits the referenced Role or ClusterRole permissions to resources in the RoleBinding namespace. Users and groups are not namespaced, and a ServiceAccount subject may be from another namespace.",
      "ko": "RoleBinding은 참조한 Role 또는 clusterRole의 권한을 RoleBinding이 있는 namespace의 리소스에 한정합니다. user와 group은 namespaced가 아니며 ServiceAccount subject는 다른 namespace에 있을 수 있습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/rbac/"
  },
  {
    "id": "local-318",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "RBAC cross-namespace subjects · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "A RoleBinding in namespace team-a names ServiceAccount build in namespace ci. Where does the permission apply?",
      "ko": "team-a의 RoleBinding이 ci namespace의 ServiceAccount build를 지정합니다. 권한은 어디에 적용됩니까?"
    },
    "choices": {
      "en": [
        "To every namespace in the cluster",
        "Only inside ci because the subject namespace always wins",
        "To that ServiceAccount when it acts in team-a, because the binding namespace scopes the Role",
        "Nowhere unless the ServiceAccount is cluster-admin"
      ],
      "ko": [
        "cluster의 모든 namespace에서",
        "subject namespace가 항상 우선하므로 ci 안에서만",
        "binding namespace가 Role을 범위하므로 해당 ServiceAccount가 team-a에서 동작할 때",
        "ServiceAccount가 cluster-admin이어야만 적용됨"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "A RoleBinding grants its Role in the binding namespace, even when its subject is a ServiceAccount from another namespace.",
      "ko": "RoleBinding은 subject가 다른 namespace의 ServiceAccount여도 binding namespace에서 Role을 부여합니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/rbac/"
  },
  {
    "id": "local-319",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "RBAC cluster scope · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What does a ClusterRoleBinding do differently from a RoleBinding?",
      "ko": "clusterRoleBinding은 RoleBinding과 어떻게 다릅니까?"
    },
    "choices": {
      "en": [
        "It is limited to one Pod",
        "It creates only a Pod-local permission",
        "It can grant an explicit deny",
        "It grants the referenced ClusterRole at cluster scope"
      ],
      "ko": [
        "하나의 Pod로 제한됨",
        "Pod-local 권한만 생성함",
        "explicit deny를 부여할 수 있음",
        "참조한 clusterRole을 cluster 범위에서 부여함"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "ClusterRoleBinding grants cluster-wide permissions represented by the ClusterRole; RBAC is additive rather than an explicit-deny system.",
      "ko": "clusterRoleBinding은 clusterRole이 표현하는 cluster-wide 권한을 부여하며 RBAC는 additive이고 explicit-deny system이 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/rbac/"
  },
  {
    "id": "local-320",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "RBAC troubleshooting · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "A user can read Pods but cannot create them despite two Roles. What should the reviewer check first?",
      "ko": "user가 Pod를 read할 수 있지만 두 Role이 있어도 create할 수 없습니다. reviewer가 먼저 확인할 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Whether any binding actually grants create on Pods in the requested namespace and API group",
        "Whether a Role contains an explicit deny",
        "Whether the RoleBinding names the intended subject",
        "Whether the Role grants get/list but omits create"
      ],
      "ko": [
        "요청한 namespace와 API group에서 어떤 binding도 Pod create를 grant하는지",
        "Role에 explicit deny가 있는지",
        "RoleBinding이 의도한 subject를 지정하는지",
        "Role이 get/list만 grant하고 create를 omit하는지"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "RBAC permissions are the union of grants; a missing create verb or wrong resource group explains denial, not an explicit deny.",
      "ko": "RBAC 권한은 grant의 union이며 create verb 누락 또는 잘못된 resource group이 denial의 원인이지 explicit deny가 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/rbac/"
  },
  {
    "id": "local-321",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "RBAC least privilege · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which principle should guide a Role that lets a build job read one ConfigMap?",
      "ko": "build job이 하나의 ConfigMap을 read하도록 하는 Role에 적용할 원칙은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Grant cluster-admin so future builds never fail",
        "Name the resource and verb narrowly instead of granting all resources",
        "Use a wildcard for every API group",
        "Add a deny rule to unrelated namespaces"
      ],
      "ko": [
        "향후 build가 실패하지 않도록 cluster-admin을 부여함",
        "모든 resource를 grant하지 말고 resource와 verb를 좁게 지정함",
        "모든 API group에 wildcard를 사용함",
        "무관한 namespace에 deny rule을 추가함"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Least privilege names only the required resource, namespace, and verb. RBAC does not use explicit deny rules to subtract permissions.",
      "ko": "least privilege는 필요한 resource, namespace와 verb만 지정합니다. RBAC는 권한을 빼기 위한 explicit deny rule을 사용하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/rbac/"
  },
  {
    "id": "local-322",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Secret encoding · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What does a Kubernetes Secret encode by default when stored in a manifest?",
      "ko": "manifest에 저장할 때 Kubernetes Secret은 기본적으로 무엇을 합니까?"
    },
    "choices": {
      "en": [
        "It encrypts the value with a cloud KMS automatically",
        "It hashes the value irreversibly",
        "It base64-encodes the value, which is not encryption",
        "It stores the value only in the client terminal"
      ],
      "ko": [
        "cloud KMS로 자동 encryption함",
        "value를 되돌릴 수 없게 hash함",
        "value를 base64-encode하며 이는 encryption이 아님",
        "value를 client terminal에만 저장함"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Base64 is an encoding and can be decoded by anyone who obtains the object; secrecy requires access control and, where configured, encryption at rest.",
      "ko": "base64는 encoding이므로 object를 얻은 누구나 decode할 수 있습니다. secrecy에는 access control과 구성된 경우 at-rest encryption이 필요합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/configuration/secret/"
  },
  {
    "id": "local-323",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Secret encryption at rest · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What must happen after enabling a new encryptionConfiguration for existing Secret objects?",
      "ko": "기존 Secret object에 새 encryptionconfiguration을 enable한 후 무엇을 해야 합니까?"
    },
    "choices": {
      "en": [
        "Disable RBAC",
        "Assume old objects were encrypted automatically",
        "Delete the API server certificate",
        "Rewrite or update existing objects so they are persisted using the new provider"
      ],
      "ko": [
        "RBAC를 비활성화함",
        "old object가 자동으로 encryption되었다고 가정함",
        "API server certificate를 삭제함",
        "새 provider로 persist되도록 existing object를 rewrite 또는 update함"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Changing the configuration does not rewrite data already stored; existing objects must be rewritten and old plaintext handled according to policy.",
      "ko": "configuration 변경은 이미 저장된 data를 rewrite하지 않으므로 existing object를 rewrite하고 old plaintext를 policy에 따라 처리해야 합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/configuration/secret/"
  },
  {
    "id": "local-324",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Secret access · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which Secret handling practice reduces exposure in a Pod?",
      "ko": "Pod에서 Secret 노출을 줄이는 practice는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Mount only required keys into a narrowly scoped workload and limit who can read the Secret",
        "Put the Secret in an image layer",
        "Mount the entire Secret into every container in the Pod",
        "Grant all namespaces read access"
      ],
      "ko": [
        "필요한 key만 좁은 범위의 workload에 mount하고 Secret을 read할 수 있는 주체를 제한함",
        "Secret을 image layer에 넣음",
        "Pod의 모든 container에 전체 Secret을 mount함",
        "모든 namespace에 read access를 부여함"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Mounting only required Secret keys and limiting read permissions reduces both the data exposed to a workload and the identities that can retrieve it. Putting Secrets in an image or granting every namespace access broadens exposure.",
      "ko": "필요한 Secret key만 mount하고 read 권한을 제한하면 workload에 노출되는 data와 이를 읽을 수 있는 identity가 함께 줄어듭니다. Secret을 image에 넣거나 모든 namespace에 권한을 주면 노출이 커집니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/configuration/secret/"
  },
  {
    "id": "local-325",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "ServiceAccount Secret exposure · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Why should a ServiceAccount Secret token not be copied into source control?",
      "ko": "ServiceAccount Secret token을 source control에 복사하지 않아야 하는 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Source control cannot store text",
        "Anyone with repository access could replay the long-lived credential",
        "The token would become a NetworkPolicy",
        "The API server cannot parse tokens from files"
      ],
      "ko": [
        "source control은 text를 저장할 수 없기 때문",
        "repository access가 있는 누구나 장기 credential을 replay할 수 있기 때문",
        "token이 NetworkPolicy가 되기 때문",
        "API server가 file의 token을 parse할 수 없기 때문"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "A copied credential can be reused until revoked or expired; short-lived projected tokens and protected delivery reduce this risk.",
      "ko": "복사된 credential은 revoke 또는 expire될 때까지 재사용될 수 있으며 단기 projected token과 보호된 전달이 위험을 줄입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/configuration/secret/"
  },
  {
    "id": "local-326",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Namespace isolation · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which namespace arrangement supports administrative isolation?",
      "ko": "administrative isolation을 지원하는 namespace 배치는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Give every team the same cluster-admin account",
        "Put all teams in default and rely on naming conventions",
        "Place separate teams in namespaces with separate RBAC, quotas, and policies",
        "Use one namespace per Pod and no policy"
      ],
      "ko": [
        "모든 team에 같은 cluster-admin account를 줌",
        "모든 team을 default에 두고 naming convention에 의존함",
        "별도 team을 별도 namespace에 두고 RBAC, quota와 policy를 분리함",
        "Pod마다 namespace를 만들고 policy를 사용하지 않음"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Namespaces provide a useful administrative scope for RBAC and policy, although they are not a complete kernel boundary.",
      "ko": "namespace는 RBAC와 policy를 위한 administrative 범위를 제공하지만 완전한 kernel boundary는 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-327",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "NetworkPolicy additive rules · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Two NetworkPolicy objects select the same Pod. How are their allowed rules combined?",
      "ko": "두 NetworkPolicy object가 같은 Pod를 select합니다. allowed rule은 어떻게 결합됩니까?"
    },
    "choices": {
      "en": [
        "Only egress rules are considered",
        "The last-created policy replaces earlier policies",
        "The most restrictive policy creates a separate explicit deny",
        "Allowed traffic is additive across the selected policies"
      ],
      "ko": [
        "egress rule만 고려됨",
        "마지막 policy가 이전 policy를 대체함",
        "가장 restrictive한 policy가 별도 explicit deny를 생성함",
        "선택된 policy 전체에서 allowed traffic이 additive로 결합됨"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "NetworkPolicy rules from policies selecting the same Pod are additive, so a flow allowed by any applicable policy can be permitted. The last-created or most restrictive object does not replace the others.",
      "ko": "같은 Pod를 선택한 NetworkPolicy의 rule은 additive이므로 적용 가능한 policy 중 하나가 허용한 flow는 허용될 수 있습니다. 마지막 policy나 가장 restrictive한 object가 나머지를 대체하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/network-policies/"
  },
  {
    "id": "local-328",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "NetworkPolicy CNI enforcement · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What must an enforcing CNI do for a NetworkPolicy object to restrict packets?",
      "ko": "NetworkPolicy object가 packet을 제한하려면 enforcing CNI가 무엇을 해야 합니까?"
    },
    "choices": {
      "en": [
        "Implement the policy in the data plane",
        "Only store the object in the API server",
        "Convert it into an image signature",
        "Grant selected Pods cluster-admin"
      ],
      "ko": [
        "data plane에서 policy를 구현함",
        "API server에 object만 저장함",
        "image signature로 변환함",
        "선택된 Pod에 cluster-admin을 grant함"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "An enforcing CNI must translate the NetworkPolicy into data-plane filtering rules; storing the object in the API server alone does not filter packets. Image signing and RBAC grant are unrelated controls.",
      "ko": "enforcing CNI는 NetworkPolicy를 data-plane filtering rule로 변환해야 packet을 제한할 수 있습니다. API server에 object를 저장하는 것만으로는 packet이 filtering되지 않으며 image signing과 RBAC grant는 별개입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/network-policies/"
  },
  {
    "id": "local-329",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "NetworkPolicy ingress and egress · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "A policy isolates a database. Which pair of checks is needed for a client connection?",
      "ko": "policy가 database를 isolate합니다. client connection에 필요한 check 조합은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Only database egress must be allowed",
        "Client egress must be allowed and database ingress must allow the client",
        "Only a matching Service label is required",
        "TLS alone makes NetworkPolicy unnecessary"
      ],
      "ko": [
        "database egress만 허용해야 함",
        "client egress가 허용되고 database ingress가 client를 허용해야 함",
        "matching Service label만 필요함",
        "TLS만으로 NetworkPolicy가 불필요함"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "The client must be allowed to send traffic and the database must allow that client in ingress; either direction can block the connection. TLS or a Service label alone does not satisfy NetworkPolicy.",
      "ko": "client가 traffic을 보내도록 허용되고 database ingress가 해당 client를 허용해야 하며 어느 한쪽이 막아도 connection은 실패합니다. TLS나 Service label만으로는 NetworkPolicy 조건을 충족하지 못합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/network-policies/"
  },
  {
    "id": "local-330",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "NetworkPolicy selectors · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "In a NetworkPolicy rule with namespaceSelector and podSelector in the same peer entry, how do they apply?",
      "ko": "같은 NetworkPolicy peer entry의 namespaceSelector와 PodSelector는 어떻게 적용됩니까?"
    },
    "choices": {
      "en": [
        "They create a TLS identity",
        "They select either all Pods or all namespaces independently",
        "They select Pods matching the pod selector in namespaces matching the namespace selector",
        "They select nodes by hostname"
      ],
      "ko": [
        "TLS identity를 생성함",
        "모든 Pod 또는 모든 namespace를 독립적으로 선택함",
        "namespaceSelector에 match하는 namespace에서 Pod selector에 match하는 Pod를 선택함",
        "hostname으로 node를 선택함"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Selectors in one peer entry combine as an AND relationship; separate entries can express alternatives.",
      "ko": "하나의 peer entry의 selector는 AND 관계로 결합되며 별도 entry는 alternative를 표현할 수 있습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/network-policies/"
  },
  {
    "id": "local-331",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Audit policy levels · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which audit policy level records request metadata but not request and response bodies?",
      "ko": "request metadata는 기록하지만 request와 response body는 기록하지 않는 감사 policy level은 무엇입니까?"
    },
    "choices": {
      "en": [
        "None",
        "Request",
        "RequestResponse",
        "Metadata"
      ],
      "ko": [
        "None",
        "request",
        "requestresponse",
        "Metadata"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Metadata records who, what, and when information without the object bodies; Request and RequestResponse include progressively more body data.",
      "ko": "Metadata는 object body 없이 who, what, when 정보를 기록하며 request와 requestresponse는 더 많은 body data를 포함합니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/"
  },
  {
    "id": "local-332",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Audit sensitive data · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Why should an audit policy avoid recording Secret response bodies by default?",
      "ko": "감사 policy가 기본적으로 Secret response body를 기록하지 않아야 하는 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Audit logs could otherwise duplicate sensitive values into another data store",
        "Secret bodies cannot be serialized",
        "It prevents authentication from working",
        "It disables all audit events"
      ],
      "ko": [
        "audit log가 sensitive value를 다른 data store에 복제할 수 있기 때문",
        "Secret body는 serialize할 수 없음",
        "authentication이 작동하지 않게 함",
        "모든 감사 event를 disable함"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Secret values in audit events can be copied into external log storage, creating another disclosure path. Omitting the response body reduces that duplicate exposure without disabling authentication or every audit event.",
      "ko": "audit event의 Secret value는 external log storage로 복사되어 별도의 disclosure path가 될 수 있습니다. response body를 제외하면 authentication이나 모든 audit event를 끄지 않고 중복 노출을 줄입니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/"
  },
  {
    "id": "local-333",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Audit log protection · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What is the security value of sending audit logs to protected external storage?",
      "ko": "audit log를 보호된 external storage로 보내는 보안 가치는 무엇입니까?"
    },
    "choices": {
      "en": [
        "It makes every API request authorized",
        "It preserves evidence if the cluster or its local log files are compromised",
        "It prevents attacks before they occur",
        "It keeps Secrets only in memory"
      ],
      "ko": [
        "모든 API request를 authorized로 만듦",
        "cluster 또는 local log file이 침해되어도 evidence를 보존함",
        "attack이 발생하기 전에 모두 방지함",
        "Secret을 memory에만 보관함"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "External protected storage preserves audit evidence if an attacker alters the cluster or deletes local logs. It does not authorize requests, prevent attacks before detection, or keep Secrets only in memory.",
      "ko": "protected external storage는 attacker가 cluster를 변경하거나 local log를 삭제해도 audit evidence를 보존합니다. request를 authorized로 만들거나 attack을 사전에 막고 Secret을 memory에만 보관하지는 않습니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/"
  },
  {
    "id": "local-334",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Audit attribution · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which audit event detail helps attribute a change to a human or workload?",
      "ko": "change를 human 또는 workload에 귀속하는 데 도움이 되는 감사 event detail은 무엇입니까?"
    },
    "choices": {
      "en": [
        "The node temperature",
        "The request object label alone",
        "The authenticated user or ServiceAccount identity",
        "The image layer count"
      ],
      "ko": [
        "node temperature",
        "request object label만",
        "authenticated user 또는 ServiceAccount identity",
        "image layer count"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "The audit identity identifies which human user or ServiceAccount submitted the change, enabling attribution and follow-up. Node temperature, a label alone, and image layer count do not identify the requester.",
      "ko": "audit identity는 어떤 human user나 ServiceAccount가 change를 제출했는지 보여주므로 attribution과 후속 조치가 가능합니다. node temperature, label만 있는 정보와 image layer count는 requester를 식별하지 못합니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/"
  },
  {
    "id": "local-335",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Audit response · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What should operators do when audit logs reveal repeated forbidden requests?",
      "ko": "audit log에서 반복적인 forbidden request가 발견되면 operator는 무엇을 해야 합니까?"
    },
    "choices": {
      "en": [
        "Disable authorization",
        "Delete the logs to stop alerts",
        "A policy record missing the relevant scope or review evidence",
        "Investigate the identity and scope permissions, then adjust or contain according to evidence"
      ],
      "ko": [
        "authorization을 비활성화함",
        "alert를 멈추려고 log를 삭제함",
        "관련 범위나 검토 evidence가 빠진 policy record",
        "identity와 범위 권한을 조사한 뒤 evidence에 따라 조정하거나 contain함"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Forbidden requests may indicate misconfiguration or attack; investigation and least-privilege correction preserve evidence and reduce risk.",
      "ko": "forbidden request는 misconfiguration 또는 attack일 수 있으므로 evidence를 보존하며 조사하고 least privilege로 수정해야 합니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/"
  },
  {
    "id": "local-336",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Workload isolation · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which Pod configuration creates the greatest need for a strong isolation review?",
      "ko": "강한 isolation review가 가장 필요한 Pod configuration은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Privileged mode combined with hostPath access",
        "A read-only ConfigMap mount",
        "A non-root process with dropped capabilities",
        "A Pod using a dedicated namespace"
      ],
      "ko": [
        "privileged mode와 hostPath access를 함께 사용함",
        "read-only ConfigMap mount",
        "non-root process와 dropped capability",
        "dedicated namespace를 사용하는 Pod"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Privileged host access can expose node state and capabilities, so it deserves explicit review and usually should be avoided.",
      "ko": "privileged host access는 node state와 capability를 노출할 수 있어 명시적 review가 필요하며 일반적으로 피해야 합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-337",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Namespace boundaries · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which statement about a Kubernetes namespace is accurate?",
      "ko": "Kubernetes namespace에 대한 정확한 설명은 무엇입니까?"
    },
    "choices": {
      "en": [
        "It is a physical machine boundary",
        "It scopes many names and policies but does not alone isolate the kernel or network",
        "It encrypts all objects automatically",
        "It grants a separate API server"
      ],
      "ko": [
        "physical machine boundary임",
        "많은 name과 policy의 범위를 정하지만 자체적으로 kernel이나 network를 isolate하지 않음",
        "모든 object를 자동 encryption함",
        "별도 API server를 부여함"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Namespaces support organization and access policy; additional controls are needed for kernel, network, and data isolation.",
      "ko": "namespace는 organization과 access policy를 지원하며 kernel, network와 data isolation에는 추가 control이 필요합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-338",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Filesystem isolation · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Why should a Pod use a read-only root filesystem when its application permits it?",
      "ko": "application이 허용한다면 Pod가 read-only root filesystem을 사용해야 하는 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "It blocks all network traffic",
        "It grants host root access",
        "It limits persistence of unauthorized changes inside the container",
        "It makes an image signature valid"
      ],
      "ko": [
        "모든 network traffic을 block함",
        "host root access를 grant함",
        "container 내부 unauthorized change의 persistence를 제한함",
        "image signature를 valid하게 함"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "A read-only root filesystem prevents a process from leaving persistent unauthorized changes in the container layer. It does not block networking, grant host root, or validate an image signature.",
      "ko": "read-only root filesystem은 process가 container layer에 unauthorized change를 지속해서 남기는 것을 막습니다. network를 차단하거나 host root를 주고 image signature를 검증하지는 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-339",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "PSA audit mode · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is the purpose of a Pod Security Admission namespace label at the audit level?",
      "ko": "audit level의 Pod 보안 Admission namespace label 목적은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Disable audit logging",
        "Reject all existing Pods",
        "Give every Pod host access",
        "Record violations for review without enforcing rejection"
      ],
      "ko": [
        "감사 로깅을 비활성화함",
        "모든 existing Pod를 reject함",
        "모든 Pod에 host access를 줌",
        "거부를 enforce하지 않고 review를 위해 violation을 기록함"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "The audit mode reports policy violations in audit annotations or logs; it does not block admission.",
      "ko": "audit mode는 audit annotation 또는 log에 policy violation을 report하지만 admission을 block하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/pod-security-admission/"
  },
  {
    "id": "local-340",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "RBAC namespace scope · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "A user has a Role in namespace a. Can that Role alone authorize reading Pods in namespace b?",
      "ko": "user가 namespace a의 Role을 가지고 있습니다. 그 Role만으로 namespace b의 Pod를 read할 수 있습니까?"
    },
    "choices": {
      "en": [
        "No; a namespaced Role grants only through a binding in its namespace",
        "Yes; all Roles are cluster-wide",
        "Yes; if a separate ClusterRoleBinding also grants that access",
        "No; because RBAC has explicit deny rules"
      ],
      "ko": [
        "아니요. namespaced Role은 해당 namespace의 binding을 통해서만 grant됩니다",
        "예. 모든 Role은 cluster-wide입니다",
        "예. 별도 clusterRoleBinding도 access를 grant하면",
        "아니요. RBAC에 explicit deny rule이 있기 때문입니다"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A Role is namespaced and grants permissions only through a binding in that namespace; it cannot by itself authorize access in namespace b. A separate ClusterRoleBinding would be an additional grant, not a property of this Role alone.",
      "ko": "Role은 namespace 범위이며 해당 namespace의 binding을 통해서만 권한을 줍니다. 따라서 이 Role만으로 namespace b에 access할 수 없고 별도 ClusterRoleBinding은 추가 grant입니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/rbac/"
  },
  {
    "id": "local-341",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "RBAC Secret access · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which control prevents a ServiceAccount from reading a Secret it does not need?",
      "ko": "ServiceAccount가 필요하지 않은 Secret을 read하지 못하게 하는 control은 무엇입니까?"
    },
    "choices": {
      "en": [
        "A NetworkPolicy denying API-server traffic",
        "An RBAC rule that omits get and list on Secrets",
        "An admission policy rejecting Secret objects",
        "An encryption-at-rest provider"
      ],
      "ko": [
        "API-server traffic을 deny하는 NetworkPolicy",
        "Secret에 대한 get과 list를 omit한 RBAC rule",
        "Secret object를 reject하는 admission policy",
        "at-rest encryption provider"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Omitting `get` and `list` for Secrets from the ServiceAccount's RBAC rules prevents those API reads. NetworkPolicy, admission rejection, and encryption at rest address traffic, object admission, or storage confidentiality instead.",
      "ko": "ServiceAccount의 RBAC rule에서 Secret의 `get`과 `list`를 제외하면 해당 API read를 막을 수 있습니다. NetworkPolicy, admission rejection과 at-rest encryption은 각각 traffic·admission·storage confidentiality를 다룹니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/rbac/"
  },
  {
    "id": "local-342",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Secret workload identity · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which identity should normally access a workload Secret?",
      "ko": "workload Secret에 일반적으로 access해야 하는 identity는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Any anonymous client",
        "Every node user",
        "The workload ServiceAccount with narrowly scoped permission",
        "The cluster scheduler only"
      ],
      "ko": [
        "모든 anonymous client",
        "모든 node user",
        "범위가 좁은 권한을 가진 workload ServiceAccount",
        "cluster scheduler만"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "A dedicated workload identity makes access attributable and limits exposure; node or anonymous identities are too broad.",
      "ko": "전용 workload identity는 access를 추적 가능하게 하고 노출을 제한하며 node 또는 anonymous identity는 너무 넓습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/configuration/secret/"
  },
  {
    "id": "local-343",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "NetworkPolicy default deny · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is the effect of a default-deny ingress policy with no allow rules?",
      "ko": "allow rule이 없는 default-deny ingress policy의 효과는 무엇입니까?"
    },
    "choices": {
      "en": [
        "The API server is disabled",
        "All egress from every namespace is denied",
        "The policy encrypts ingress",
        "Ingress to selected Pods is denied unless another applicable policy allows it"
      ],
      "ko": [
        "API server가 disable됨",
        "모든 namespace의 모든 egress가 deny됨",
        "policy가 ingress를 encryption함",
        "다른 적용 policy가 허용하지 않는 한 선택된 Pod로의 ingress가 deny됨"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "A default-deny ingress policy selects the Pods and blocks ingress unless another applicable policy allows it. It does not disable the API server, deny all egress, or encrypt packets.",
      "ko": "default-deny ingress policy는 선택한 Pod로 들어오는 traffic을 막고 다른 적용 policy가 허용할 때만 통과시킵니다. API server를 끄거나 모든 egress를 deny하고 packet을 encryption하지는 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/network-policies/"
  },
  {
    "id": "local-344",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Audit log access · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Why should audit log access itself be restricted?",
      "ko": "audit log access 자체를 제한해야 하는 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Logs can contain identities, object metadata, and operationally sensitive details",
        "Logs are never useful to attackers",
        "Restriction would stop the API server",
        "A retention policy that omits request identities and object metadata"
      ],
      "ko": [
        "log에 identity, object metadata와 operation상 sensitive detail이 포함될 수 있기 때문",
        "log는 attack에 절대 유용하지 않기 때문",
        "restriction이 API server를 중지하기 때문",
        "request identity와 object metadata를 제외하는 retention policy"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Audit logs can expose requester identities, object metadata, and sensitive operational details, so access to the logs needs protection. Restricting logs does not stop the API server or make logs useless.",
      "ko": "audit log에는 requester identity, object metadata와 민감한 운영 detail이 포함될 수 있으므로 log access를 보호해야 합니다. log 제한은 API server를 중지시키지 않으며 log의 유용성도 없애지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/"
  },
  {
    "id": "local-345",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod readiness · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What does a readiness probe failure normally affect?",
      "ko": "readiness probe failure는 일반적으로 무엇에 영향을 줍니까?"
    },
    "choices": {
      "en": [
        "Whether the image is signed",
        "Whether a Service should send traffic to the Pod",
        "Whether RBAC grants a Role",
        "Whether etcd is encrypted"
      ],
      "ko": [
        "image가 서명되었는지",
        "Service가 Pod에 traffic을 보낼지 여부",
        "RBAC가 Role을 grant하는지",
        "etcd가 encryption되었는지"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Readiness controls whether a Pod is considered ready for traffic; it is not a security authorization or image-integrity check.",
      "ko": "readiness는 Pod가 traffic을 받을 준비가 되었는지 제어하며 보안 authorization이나 image-integrity check가 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-346",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Pod filesystem hardening · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which Pod setting helps keep a process from writing unexpected files in its root filesystem?",
      "ko": "process가 root filesystem에 예기치 않은 file을 쓰지 못하게 도움을 주는 Pod setting은 무엇입니까?"
    },
    "choices": {
      "en": [
        "hostIPC: true",
        "hostPID: true",
        "readOnlyRootFilesystem: true",
        "privileged: true"
      ],
      "ko": [
        "hostIPC: true",
        "hostPID: true",
        "readOnlyRootFilesystem: true",
        "privileged: true"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "A read-only root filesystem limits writes inside the container; required writable paths should be explicit volumes.",
      "ko": "read-only root filesystem은 container 내부 write를 제한하며 필요한 writable path는 명시적인 volume이어야 합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-347",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "Authorization sequence · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which authentication result should be followed by an authorization check?",
      "ko": "authentication 결과 뒤에 어떤 check가 이어져야 합니까?"
    },
    "choices": {
      "en": [
        "The request should be converted to a Secret",
        "The principal is automatically cluster-admin",
        "The API server should skip audit logging",
        "The identified principal must be checked against the requested verb and resource"
      ],
      "ko": [
        "request가 Secret으로 변환됨",
        "principal이 자동으로 cluster-admin이 됨",
        "API server가 감사 로깅을 건너뜀",
        "식별된 principal을 요청한 verb와 resource에 대해 check해야 함"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Authentication supplies identity; authorization evaluates whether that identity has the requested permission.",
      "ko": "authentication은 identity를 제공하고 authorization은 해당 identity가 요청한 권한을 가지는지 평가합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-348",
    "exam": "kcsa",
    "domain": "Kubernetes Security Fundamentals",
    "subtopic": "NetworkPolicy DNS egress · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What does a deny-by-default egress policy require before a Pod can reach a DNS Service?",
      "ko": "deny-by-default egress policy에서 Pod가 DNS Service에 도달하려면 무엇이 필요합니까?"
    },
    "choices": {
      "en": [
        "An explicit egress allowance for the DNS destination and port",
        "Only an ingress rule on the client Pod",
        "An egress rule for TCP/443 when DNS uses UDP/53",
        "A rule selecting DNS but omitting namespace or port"
      ],
      "ko": [
        "DNS destination과 port에 대한 명시적 egress allowance",
        "client Pod의 ingress rule만",
        "DNS가 UDP/53을 사용할 때 TCP/443 egress rule",
        "namespace 또는 port를 생략하고 DNS를 select하는 rule"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A deny-by-default egress policy needs an explicit rule for the DNS destination and port, commonly UDP 53, before name resolution can work. A client ingress rule or mismatched TCP/443 rule does not permit that egress.",
      "ko": "deny-by-default egress policy에서는 name resolution 전에 DNS destination과 port(일반적으로 UDP 53)를 명시적으로 허용해야 합니다. client ingress rule이나 맞지 않는 TCP/443 rule은 해당 egress를 허용하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/network-policies/"
  },
  {
    "id": "local-349",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Trust boundaries · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What does a trust boundary represent in a Kubernetes data flow?",
      "ko": "Kubernetes data flow에서 trust boundary는 무엇을 나타냅니까?"
    },
    "choices": {
      "en": [
        "A point where assumptions about identity or control change",
        "A list of exposed services and ports",
        "A control that records requests after they cross a boundary",
        "A data-flow arrow that does not change identity or control assumptions"
      ],
      "ko": [
        "identity 또는 control에 대한 가정이 바뀌는 지점",
        "노출된 service와 port 목록",
        "boundary를 통과한 뒤 request를 기록하는 control",
        "identity 또는 control 가정이 바뀌지 않는 data-flow arrow"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Trust boundaries identify crossings that need authentication, authorization, validation, or monitoring.",
      "ko": "trust boundary는 authentication, authorization, validation 또는 monitoring이 필요한 crossing을 식별합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-350",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Data flow boundaries · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which path is a common trust-boundary crossing?",
      "ko": "일반적인 trust-boundary crossing은 무엇입니까?"
    },
    "choices": {
      "en": [
        "A process reading a ConfigMap through its own mounted volume",
        "A client request entering the API server",
        "A Service forwarding a request between Pods in one trust zone",
        "A container reading a file from its own image layer"
      ],
      "ko": [
        "process가 자신의 mounted volume을 통해 ConfigMap을 읽음",
        "client request가 API server에 들어오는 것",
        "하나의 trust zone에서 Service가 Pod 사이 request를 전달함",
        "container가 자신의 image layer에서 file을 읽음"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "A client request entering the API server crosses from the client's trust assumptions into the API server's security boundary. Local file reads within one workload do not cross that external boundary.",
      "ko": "client request가 API server에 들어오면 client의 trust 가정에서 API server의 보안 경계로 넘어갑니다. 같은 workload 안에서 local file이나 mounted volume을 읽는 동작은 외부 경계를 넘지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-351",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Threat-modeling flow · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "In a Kubernetes threat model, why is a data-flow diagram from ingress to Service to Pod useful?",
      "ko": "Kubernetes threat model에서 ingress부터 Service와 Pod까지의 data-flow diagram이 유용한 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "It replaces security testing",
        "It proves all components are trusted",
        "It exposes components, flows, and trust boundaries to review",
        "It automatically writes NetworkPolicy"
      ],
      "ko": [
        "보안 testing을 대체함",
        "모든 component가 trusted임을 증명함",
        "component, flow와 trust boundary를 review에 드러냄",
        "NetworkPolicy를 자동 작성함"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "The diagram makes components, data flows, and trust-boundary crossings visible for review. It does not replace testing, prove trust, or generate NetworkPolicy automatically.",
      "ko": "diagram은 component, data flow와 trust-boundary crossing을 review할 수 있게 드러냅니다. testing을 대신하거나 trust를 증명하고 NetworkPolicy를 자동 생성하지는 않습니다."
    },
    "ref": "https://owasp.org/www-community/Threat_Modeling"
  },
  {
    "id": "local-352",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Persistence and storage · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What is the persistence risk of an unencrypted database volume?",
      "ko": "unencrypted database volume의 persistence risk는 무엇입니까?"
    },
    "choices": {
      "en": [
        "A PersistentVolume is deleted whenever a Pod restarts",
        "A storage class guarantees encryption without configuration",
        "A policy record missing the relevant scope or review evidence",
        "A thief of the disk or snapshot may read retained data"
      ],
      "ko": [
        "Pod가 restart될 때마다 PersistentVolume이 삭제됨",
        "storage class가 configuration 없이 encryption을 보장함",
        "관련 범위나 검토 evidence가 빠진 policy record",
        "disk 또는 snapshot을 훔친 사람이 retained data를 읽을 수 있음"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Without encryption at rest, someone who obtains the disk or a snapshot can read retained database bytes. A restart does not delete every volume, and a storage class does not guarantee encryption without its provider settings.",
      "ko": "at-rest encryption이 없으면 disk나 snapshot을 얻은 사람이 저장된 database byte를 읽을 수 있습니다. restart가 모든 volume을 삭제하지 않으며 storage class만으로 encryption이 보장되지도 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-353",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Persistence credentials · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which control limits damage from a compromised backup credential?",
      "ko": "침해된 backup credential의 피해를 제한하는 통제는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Scope it to required backups and use short-lived, auditable access",
        "Use a long-lived backup credential shared by all operators",
        "Store the backup credential beside an unencrypted backup",
        "Skip expiry and audit logging to reduce operational overhead"
      ],
      "ko": [
        "필요한 backup으로 범위를 제한하고 단기·감사 가능한 접근 권한을 사용함",
        "모든 operator가 공유하는 장기 backup credential을 사용함",
        "backup credential을 암호화하지 않은 backup 옆에 보관함",
        "운영 부담을 줄이기 위해 만료와 감사 로깅을 생략함"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Scope and short-lived access reduce blast radius; shared long-lived credentials, colocated secrets, and skipped audit controls increase exposure.",
      "ko": "범위를 제한한 단기 접근은 피해 범위를 줄이며, 공유 장기 credential과 함께 보관한 secret 및 감사 통제 생략은 노출을 키웁니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-354",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Denial of service · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which event is a denial-of-service condition?",
      "ko": "서비스 거부(DoS) 상태인 사건은 무엇입니까?"
    },
    "choices": {
      "en": [
        "A memory limit evicts a container after it exceeds its limit",
        "A flood consumes all available API-server capacity",
        "A rate-limited client receives 429 responses",
        "Audit-backend backpressure delays log delivery"
      ],
      "ko": [
        "memory 제한을 초과해 container가 evict됨",
        "flood로 모든 API-server capacity를 소모함",
        "rate-limited client가 429 response를 받음",
        "감사 backend backpressure로 log 전달이 지연됨"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "A flood that consumes all API-server capacity prevents legitimate requests from being served, which is denial of service. A 429 response or log backpressure is a control or downstream symptom rather than the flood itself.",
      "ko": "API-server capacity를 모두 소모하는 flood는 정상 request 처리를 막으므로 denial of service입니다. 429 response와 log backpressure는 각각 제한 동작과 downstream 증상입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-355",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "DoS response · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What is a useful first response to a sudden API request flood?",
      "ko": "갑작스러운 API request flood에 대한 유용한 첫 대응은 무엇입니까?"
    },
    "choices": {
      "en": [
        "A policy record missing the relevant scope or review evidence",
        "Grant the source more permissions",
        "Rate-limit or contain the source while preserving evidence and checking impact",
        "Disable authentication cluster-wide"
      ],
      "ko": [
        "관련 범위나 검토 evidence가 빠진 policy record",
        "source에 더 많은 권한을 grant함",
        "evidence를 보존하고 impact를 확인하면서 source를 rate-limit 또는 contain함",
        "cluster-wide authentication을 비활성화함"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Containment reduces resource exhaustion while logs and metrics support attribution and recovery.",
      "ko": "containment는 resource exhaustion을 줄이고 log와 metric은 attribution과 recovery를 지원합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-356",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Resource exhaustion · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which resource limit helps prevent one Pod from exhausting node memory?",
      "ko": "하나의 Pod가 node memory를 고갈시키는 것을 막는 resource limit은 무엇입니까?"
    },
    "choices": {
      "en": [
        "A Pod priority value",
        "A CPU limit on the container",
        "A ResourceQuota for namespace object counts",
        "A memory limit on the container"
      ],
      "ko": [
        "Pod priority value",
        "container의 CPU limit",
        "namespace object count를 위한 ResourceQuota",
        "container의 memory 제한"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "A container memory limit bounds the memory it may consume and helps prevent one workload from exhausting node memory. CPU limits, priority, and ResourceQuota govern different resources or scopes.",
      "ko": "container memory limit은 사용할 수 있는 memory를 제한해 한 workload가 node memory를 고갈시키는 것을 줄입니다. CPU limit, priority와 ResourceQuota는 다른 resource나 scope를 다룹니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-357",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Malicious code execution · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "How can a malicious image execute code in a workload?",
      "ko": "malicious image는 workload에서 어떻게 code를 실행할 수 있습니까?"
    },
    "choices": {
      "en": [
        "Its entrypoint runs attacker-controlled instructions when the container starts",
        "An admission policy verifies the image before it starts",
        "A seccomp profile limits system calls after start",
        "A NetworkPolicy controls reachable peers"
      ],
      "ko": [
        "container 시작 시 entrypoint가 attacker-controlled instruction을 실행함",
        "시작 전에 admission policy가 image를 verify함",
        "시작 후 seccomp profile이 system call을 제한함",
        "NetworkPolicy가 reachable peer를 제어함"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The image entrypoint is executed when the container starts, so malicious instructions can run before the application serves traffic. Admission, seccomp, and NetworkPolicy can reduce risk but do not themselves explain how the image's code starts.",
      "ko": "container가 시작될 때 image entrypoint가 실행되므로 application이 traffic을 처리하기 전에도 malicious instruction이 동작할 수 있습니다. admission, seccomp와 NetworkPolicy는 위험을 줄이는 control이지 image code가 시작되는 방식 자체는 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-358",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Compromised workloads · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which runtime control reduces impact if an application process is compromised?",
      "ko": "application process가 침해될 때 impact를 줄이는 runtime 통제은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Privileged mode and hostPath write access",
        "Non-root execution with dropped capabilities and a read-only root filesystem",
        "A shared administrator token",
        "Disabling all process limits"
      ],
      "ko": [
        "privileged mode와 hostPath write access",
        "dropped capability와 read-only root filesystem을 사용하는 non-root 실행",
        "shared 관리자 token",
        "모든 process limit 비활성화"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Reduced identity, capability, and write access limit what a compromised process can change or invoke.",
      "ko": "축소된 identity, capability와 write access는 침해된 process가 변경하거나 호출할 수 있는 범위를 제한합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-359",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Host namespaces · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What does an attacker gain from hostPID in a Pod?",
      "ko": "Pod의 hostPID에서 attacker가 얻을 수 있는 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Automatic image signing",
        "A separate guest kernel",
        "Visibility into the node process namespace, which can expose host processes and metadata",
        "A namespace-scoped Role"
      ],
      "ko": [
        "자동 image signing",
        "별도 guest kernel",
        "node process namespace에 대한 visibility로 host process와 metadata가 노출될 수 있음",
        "namespace-범위d Role"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "hostPID removes a process-namespace boundary and should be restricted because host process visibility can aid escalation.",
      "ko": "hostPID는 process-namespace boundary를 제거하므로 host process visibility가 escalation을 도울 수 있어 제한해야 합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-360",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Attacker on the network · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which network threat does hostNetwork increase?",
      "ko": "hostNetwork는 어떤 network threat를 증가시킵니까?"
    },
    "choices": {
      "en": [
        "The Pod can only reach its own localhost",
        "The Pod receives a separate encrypted network",
        "The Pod loses all network access",
        "A Pod can bind or observe node network ports and traffic"
      ],
      "ko": [
        "Pod가 자신의 localhost만 접근함",
        "Pod가 별도의 encrypted network를 받음",
        "Pod가 모든 network access를 잃음",
        "Pod가 node network port와 traffic을 bind하거나 observe할 수 있음"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Sharing the node network namespace broadens reachable interfaces and ports and can expose node traffic.",
      "ko": "node network namespace 공유는 접근 가능한 interface와 port를 늘리고 node traffic을 노출할 수 있습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-361",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Network interception · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which measure reduces exposure to a network attacker intercepting API traffic?",
      "ko": "API traffic을 가로채는 network attacker의 노출을 줄이는 방법은 무엇입니까?"
    },
    "choices": {
      "en": [
        "TLS with certificate validation and restricted endpoints",
        "A NetworkPolicy restricting API-server reachability",
        "API authentication without transport encryption",
        "Audit logging that detects but does not prevent interception"
      ],
      "ko": [
        "certificate validation과 제한된 endpoint를 사용하는 TLS",
        "API-server reachability를 제한하는 NetworkPolicy",
        "transport encryption 없는 API authentication",
        "interception을 prevent하지 않고 detect하는 감사 로깅"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "TLS encrypts the API traffic and certificate validation detects an impostor endpoint; restricting reachable endpoints reduces who can attempt the connection. Authentication alone without encryption leaves traffic exposed.",
      "ko": "TLS는 API traffic을 encryption하고 certificate validation은 위조 endpoint를 감지하며 endpoint 제한은 연결을 시도할 주체를 줄입니다. encryption 없는 authentication만으로는 traffic이 노출될 수 있습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-362",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Sensitive data access · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What is a sensitive-data access risk from an overprivileged ServiceAccount?",
      "ko": "overprivileged ServiceAccount의 sensitive-data access risk는 무엇입니까?"
    },
    "choices": {
      "en": [
        "The Pod becomes unable to read its own ConfigMap",
        "A compromised Pod may read Secrets or objects belonging to other workloads",
        "The scheduler stops assigning nodes",
        "The image is automatically deleted"
      ],
      "ko": [
        "Pod가 자신의 ConfigMap도 read하지 못함",
        "침해된 Pod가 다른 workload의 Secret 또는 object를 read할 수 있음",
        "scheduler가 node assignment를 중지함",
        "image가 자동 삭제됨"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Broad API permissions turn a workload compromise into cross-workload data exposure; least privilege limits that path.",
      "ko": "넓은 API 권한은 workload compromise를 cross-workload data 노출로 확대하며 least privilege가 경로를 제한합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-363",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Data classification · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "When classifying data stored in a Kubernetes Secret, why should the application data be classified before choosing controls?",
      "ko": "Kubernetes Secret에 저장되는 data를 분류할 때 control을 선택하기 전에 application data를 분류해야 하는 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "All data needs identical retention",
        "Classification makes authentication unnecessary",
        "Sensitivity and impact determine storage, access, and retention requirements for the Secret data",
        "Classification automatically encrypts data"
      ],
      "ko": [
        "모든 data가 동일한 retention을 필요로 하기 때문",
        "classification이 authentication을 불필요하게 만들기 때문",
        "sensitivity와 impact가 Secret data의 storage, access와 retention requirement를 결정하기 때문",
        "classification이 data를 자동 encryption하기 때문"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Classification lets a Kubernetes team prioritize encryption, RBAC access, and retention for credentials, personal data, and public information according to impact.",
      "ko": "classification은 Kubernetes team이 impact에 맞춰 credential, personal data와 공개된 information에 encryption, RBAC access와 retention을 우선 적용하게 합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-364",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Privilege escalation · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which scenario is privilege escalation?",
      "ko": "privilege escalation인 scenario는 무엇입니까?"
    },
    "choices": {
      "en": [
        "A process reads a Secret already permitted to its ServiceAccount",
        "A user uses an identity already assigned to that user",
        "A Pod is scheduled onto an allowed node",
        "A process uses a kernel or set-user-ID flaw to gain permissions beyond its original identity"
      ],
      "ko": [
        "process가 ServiceAccount에 허용된 Secret을 읽음",
        "user가 이미 할당된 identity를 사용함",
        "Pod가 허용된 node에 schedule됨",
        "process가 kernel 또는 set-user-ID flaw로 원래 identity보다 큰 권한을 얻음"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Privilege escalation occurs when a process exploits a kernel or set-user-ID flaw to obtain permissions beyond its original identity. Reading an already permitted Secret or using an assigned identity is not an escalation.",
      "ko": "privilege escalation은 process가 kernel이나 set-user-ID flaw를 악용해 원래 identity보다 큰 권한을 얻는 경우입니다. 이미 허용된 Secret을 읽거나 할당된 identity를 사용하는 것은 escalation이 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-365",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Privilege escalation controls · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which setting specifically blocks set-user-ID privilege gain in a container?",
      "ko": "container에서 set-user-ID privilege gain을 막는 setting은 무엇입니까?"
    },
    "choices": {
      "en": [
        "allowPrivilegeEscalation: false",
        "hostNetwork: true",
        "runAsUser: 0",
        "privileged: true"
      ],
      "ko": [
        "allowPrivilegeEscalation: false",
        "hostNetwork: true",
        "runAsUser: 0",
        "privileged: true"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "no_new_privs prevents a process from gaining privileges through set-user-ID or file capabilities.",
      "ko": "no_new_privs는 process가 set-user-ID 또는 file capability를 통해 privilege를 얻지 못하게 합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-366",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Host write escalation · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Why can a writable hostPath help privilege escalation?",
      "ko": "writable hostPath가 privilege escalation을 어떻게 도울 수 있습니까?"
    },
    "choices": {
      "en": [
        "It guarantees a separate kernel",
        "It may let a process modify host configuration or executables used by more privileged services",
        "It removes all host access",
        "It only changes a Service label"
      ],
      "ko": [
        "별도 kernel을 보장함",
        "더 privileged한 service가 사용하는 host configuration 또는 executable을 process가 수정할 수 있음",
        "모든 host access를 제거함",
        "Service label만 변경함"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Host writes can alter trusted node components or credentials, turning an application foothold into broader node control.",
      "ko": "host write는 trusted node component 또는 credential을 바꿔 application foothold를 더 넓은 node control로 확장할 수 있습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-367",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Credential compromise response · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which threat-model response best addresses a stolen workload credential?",
      "ko": "stolen workload credential에 가장 잘 대응하는 threat-model response는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Disable audit logging",
        "Publish the credential so all teams can share it",
        "Revoke or rotate it, investigate use, and reduce its granted scope",
        "A policy record missing the relevant scope or review evidence"
      ],
      "ko": [
        "감사 로깅을 비활성화함",
        "모든 team이 공유하도록 credential을 publish함",
        "credential을 revoke 또는 rotate하고 사용을 조사하며 grant 범위를 줄임",
        "관련 범위나 검토 evidence가 빠진 policy record"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Containment, investigation, and least-privilege correction reduce further misuse while preserving evidence.",
      "ko": "containment, investigation과 least-privilege correction은 evidence를 보존하면서 추가 misuse를 줄입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-368",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Lateral movement · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What does a lateral-movement attack try to achieve?",
      "ko": "lateral-movement attack은 무엇을 시도합니까?"
    },
    "choices": {
      "en": [
        "A process changes its own environment variable",
        "A workload accesses a Service in its own namespace",
        "An administrator rotates an image digest",
        "Moving from one compromised workload or identity to other resources"
      ],
      "ko": [
        "process가 자신의 environment variable을 변경함",
        "workload가 자신의 namespace Service에 access함",
        "관리자가 image digest를 rotate함",
        "침해된 workload 또는 identity에서 다른 resource로 이동함"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Lateral movement is movement from a compromised workload or identity into other resources, often using discovered credentials or reachable services. Local environment changes and ordinary same-namespace access do not by themselves show that movement.",
      "ko": "lateral movement는 침해된 workload나 identity에서 발견한 credential 또는 reachable service를 이용해 다른 resource로 이동하는 것입니다. local environment 변경과 정상적인 같은 namespace access만으로는 이를 의미하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-369",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Tenant boundary · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which control reduces a container’s ability to discover other tenant workloads?",
      "ko": "container가 다른 tenant workload를 discover하는 능력을 줄이는 control은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Network segmentation plus scoped identity and namespace policy",
        "A shared hostNetwork for all tenants",
        "One cluster-admin ServiceAccount",
        "A broad API-discovery permission for every tenant"
      ],
      "ko": [
        "network segmentation과 범위d identity 및 namespace policy",
        "모든 tenant의 shared hostNetwork",
        "하나의 cluster-admin ServiceAccount",
        "모든 tenant에 broad API-discovery 권한을 부여함"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Network segmentation limits reachable peers, while scoped identity and namespace policy limit what a discovered credential can read or change. Shared hostNetwork, cluster-admin, and broad discovery permissions increase tenant visibility.",
      "ko": "network segmentation은 접근 가능한 peer를 줄이고 scoped identity와 namespace policy는 발견된 credential의 read·change 범위를 제한합니다. shared hostNetwork, cluster-admin과 broad discovery 권한은 tenant visibility를 키웁니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-370",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Security properties · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is the difference between confidentiality and integrity in a threat model?",
      "ko": "threat model에서 confidentiality와 integrity의 차이는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Confidentiality prevents deletion; integrity means availability",
        "Confidentiality prevents unauthorized disclosure; integrity protects against unauthorized change",
        "They are the same property",
        "Integrity means data remains accurate and unaltered, not available"
      ],
      "ko": [
        "confidentiality가 deletion을 막고 integrity가 availability를 뜻함",
        "confidentiality는 unauthorized disclosure를 막고 integrity는 unauthorized change를 보호함",
        "동일한 property임",
        "integrity는 data가 정확하고 unaltered함을 뜻하며 availability가 아님"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Confidentiality prevents people without permission from learning data; integrity detects or prevents unauthorized modification. Availability is a separate property concerning continued access.",
      "ko": "confidentiality는 권한 없는 주체가 data를 알아내지 못하게 하고 integrity는 unauthorized modification을 방지하거나 감지합니다. availability는 지속적인 access에 관한 별도의 property입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-371",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Artifact integrity · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which control helps preserve integrity of an image deployment?",
      "ko": "image deployment의 integrity를 보존하는 데 도움이 되는 control은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Allow every user to push to production",
        "Use an unpinned tag from an unknown registry",
        "Verify a signed digest from an approved source",
        "Skip provenance checks"
      ],
      "ko": [
        "모든 user에게 production push 허용",
        "unknown registry의 unpinned tag 사용",
        "approved source의 signed digest를 verify함",
        "provenance check 생략"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "A verified digest and trusted signature link deployed bytes to approved content; they do not prove the code has no vulnerabilities.",
      "ko": "verified digest와 trusted signature는 deployed byte를 approved 콘텐츠에 연결하지만 code에 vulnerability가 없음을 증명하지는 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-372",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Application DoS · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "How can an attacker cause application-level denial of service without attacking the node?",
      "ko": "node를 attack하지 않고 application-level denial of service를 일으키는 방법은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Verify a signature",
        "Change a Pod label locally",
        "Read a public version file",
        "Send expensive valid requests that consume application workers or database connections"
      ],
      "ko": [
        "signature를 verify함",
        "local에서 Pod label을 변경함",
        "공개된 version file을 read함",
        "application worker 또는 database connection을 소모하는 expensive valid request를 보냄"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Valid-looking expensive operations can exhaust application capacity, so rate limits, quotas, and resilient design matter.",
      "ko": "valid해 보이는 expensive operation은 application capacity를 고갈시킬 수 있어 rate limit, quota와 resilient design이 중요합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-373",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Manifest threat · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What is a risk when an attacker can submit arbitrary Kubernetes manifests?",
      "ko": "attacker가 임의 Kubernetes manifest를 submit할 수 있을 때 risk는 무엇입니까?"
    },
    "choices": {
      "en": [
        "They may request privileged settings, host access, or excessive resources",
        "They can only change a display label",
        "They automatically receive a signed certificate",
        "They cannot affect running workloads"
      ],
      "ko": [
        "privileged setting, host access 또는 excessive resource를 요청할 수 있음",
        "display label만 변경할 수 있음",
        "자동으로 signed certificate를 받음",
        "running workload에 영향을 줄 수 없음"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Admission policy, RBAC, and resource controls constrain dangerous manifests before they become workloads.",
      "ko": "admission policy, RBAC와 resource control은 dangerous manifest가 workload가 되기 전에 제한합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-374",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Escalation indicators · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which observation suggests an attacker is probing for privilege escalation?",
      "ko": "attacker가 privilege escalation을 probe한다는 observation은 무엇입니까?"
    },
    "choices": {
      "en": [
        "A normal read of an allowed ConfigMap",
        "Repeated attempts to create privileged Pods or mount host paths",
        "A successful policy-compliant Pod update",
        "A scheduled backup completing"
      ],
      "ko": [
        "허용된 ConfigMap의 정상 read",
        "privileged Pod를 생성하거나 host path를 mount하려는 반복 시도",
        "정책에 맞게 성공한 Pod update",
        "scheduled backup이 완료됨"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Repeated attempts to create privileged Pods or mount host paths indicate probing for a path to host-level privileges. Normal ConfigMap reads, compliant updates, and completed backups are not escalation probes.",
      "ko": "privileged Pod 생성이나 host path mount를 반복 시도하면 host-level privilege 경로를 탐색하는 신호일 수 있습니다. 정상 ConfigMap read, 정책을 지킨 update와 완료된 backup은 escalation probe가 아닙니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-375",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Control and data planes · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Why should threat models include the control plane and data plane separately?",
      "ko": "threat model에 control plane과 data plane을 별도로 포함해야 하는 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "The data plane stores all audit policy",
        "They always share identical credentials",
        "They have different assets, trust boundaries, and failure impacts",
        "The control plane cannot be attacked"
      ],
      "ko": [
        "data plane이 모든 감사 policy를 저장하기 때문",
        "항상 동일한 credential을 공유하기 때문",
        "서로 다른 asset, trust boundary와 failure impact를 가지기 때문",
        "control plane은 attack될 수 없기 때문"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Separating planes highlights API and scheduling risks versus workload traffic and node risks, allowing appropriate controls.",
      "ko": "plane을 분리하면 API·scheduling risk와 workload traffic·node risk를 드러내 적절한 control을 적용할 수 있습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-376",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Image threat assumptions · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is a safe assumption about a container image from a trusted registry?",
      "ko": "trusted registry의 container image에 대해 안전한 가정은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Its tag can never move",
        "It cannot contain vulnerable code",
        "It can run privileged by default",
        "Trust in the registry source does not eliminate the need for digest, vulnerability, and runtime checks"
      ],
      "ko": [
        "tag가 절대 이동하지 않음",
        "vulnerable code를 포함할 수 없음",
        "기본적으로 privileged 실행 가능함",
        "registry source를 신뢰해도 digest, vulnerability와 runtime check가 필요함"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Registry provenance is one signal; content review and least-privilege runtime controls address other threats.",
      "ko": "registry provenance는 하나의 signal이며 콘텐츠 review와 least-privilege runtime 통제이 다른 threat를 다룹니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/containers/images/"
  },
  {
    "id": "local-377",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "Sensitive-data incident · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which response best contains an exposed Secret while preserving investigation?",
      "ko": "노출된 Secret을 contain하면서 investigation을 보존하는 response는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Revoke or rotate it, restrict access, and retain relevant audit evidence",
        "Only rename the Secret",
        "Publish it to confirm exposure",
        "Delete every unrelated workload"
      ],
      "ko": [
        "revoke 또는 rotate하고 access를 제한하며 관련 audit evidence를 보존함",
        "Secret name만 변경함",
        "노출을 확인하려고 publish함",
        "무관한 모든 workload를 삭제함"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Rotation stops future use while evidence helps determine what accessed the credential and what scope may have been affected.",
      "ko": "rotation은 future use를 막고 evidence는 credential에 access한 주체와 영향 범위를 파악하게 합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-378",
    "exam": "kcsa",
    "domain": "Kubernetes Threat Model",
    "subtopic": "DoS quotas · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is the security purpose of a resource quota in a namespace?",
      "ko": "namespace의 resource quota 보안 목적은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Encrypt every Pod volume",
        "Limit aggregate resource consumption to reduce noisy-neighbor exhaustion",
        "Authorize Secret reads",
        "Prove a user identity"
      ],
      "ko": [
        "모든 Pod volume을 encryption함",
        "noisy-neighbor exhaustion을 줄이도록 aggregate resource consumption을 제한함",
        "Secret read를 authorize함",
        "user identity를 증명함"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Quotas constrain consumption at namespace scope; they complement rather than replace authentication and authorization.",
      "ko": "quota는 namespace 범위에서 consumption을 제한하며 authentication과 authorization을 대체하지 않고 보완합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-379",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Supply-chain provenance · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What does a signed image provenance statement help establish?",
      "ko": "signed image provenance statement가 확립하는 데 도움을 주는 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Where and how an artifact was built, subject to trusted verification",
        "That the artifact contains no vulnerabilities",
        "That every request is authorized",
        "That the artifact never changes"
      ],
      "ko": [
        "신뢰된 검증에 따라 artifact가 어디서 어떻게 build되었는지",
        "artifact에 vulnerability가 전혀 없다는 것",
        "모든 request가 authorized라는 것",
        "artifact가 절대 변경되지 않는다는 것"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Provenance links an artifact to source and build information; signature verifies the statement, not software perfection.",
      "ko": "provenance는 artifact를 source와 build 정보에 연결하고 signature는 진술을 검증하지만 software perfection을 보장하지 않습니다."
    },
    "ref": "https://slsa.dev/spec/v1.2/"
  },
  {
    "id": "local-380",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Image repository permissions · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which repository permission is needed to publish an image but should not be given to every runtime identity?",
      "ko": "image를 publish하는 데 필요하지만 모든 runtime identity에 주면 안 되는 repository 권한은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Pull or read permission",
        "Push or write permission",
        "Delete permission",
        "Repository policy administration"
      ],
      "ko": [
        "pull 또는 read 권한",
        "push 또는 write 권한",
        "delete 권한",
        "repository policy administration"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Push or write permission is what lets a principal publish or replace image content. Pull permission only reads, while delete and repository administration are separate privileges that should also be scoped.",
      "ko": "push 또는 write 권한이 있어야 principal이 image content를 publish하거나 교체할 수 있습니다. pull은 read만 허용하며 delete와 repository administration은 별도로 범위를 제한해야 하는 권한입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/containers/images/"
  },
  {
    "id": "local-381",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Image immutability · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Why should production deployments prefer digests over mutable image tags?",
      "ko": "production deployment가 mutable image tag보다 digest를 선호해야 하는 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "A tag cannot be pulled by a cluster",
        "A digest automatically patches vulnerabilities",
        "A digest identifies the exact content selected for deployment",
        "A digest grants registry write access"
      ],
      "ko": [
        "tag는 cluster가 pull할 수 없음",
        "digest가 vulnerability를 자동 patch함",
        "digest는 deployment에 선택된 정확한 콘텐츠를 식별함",
        "digest가 registry write access를 부여함"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Digest pinning improves reproducibility and integrity; scanning and patching remain separate tasks.",
      "ko": "digest pinning은 재현성와 integrity를 높이며 scanning과 patching은 별도 task입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/containers/images/"
  },
  {
    "id": "local-382",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Repository key lifecycle · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which repository practice supports rapid response to a compromised signing key?",
      "ko": "compromised signing key에 신속히 대응하도록 지원하는 repository practice는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Allow anonymous pushes",
        "Use one key forever without audit",
        "Delete all artifact metadata",
        "Maintain revocation and trusted-key rotation procedures"
      ],
      "ko": [
        "anonymous push를 허용함",
        "audit 없이 하나의 key를 영구 사용함",
        "모든 artifact metadata를 삭제함",
        "revocation과 trusted-key rotation procedure를 유지함"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Key lifecycle records and revocation let operators stop trusting artifacts signed by a compromised identity.",
      "ko": "key lifecycle record와 revocation은 compromised identity가 서명한 artifact를 더 이상 신뢰하지 않게 합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-383",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Security observability metrics · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which signal is a numeric time series suitable for an alert on API-server latency?",
      "ko": "API-server latency alert에 적합한 numeric time series signal은 무엇입니까?"
    },
    "choices": {
      "en": [
        "A metric",
        "A trace span",
        "An audit policy rule",
        "A log line"
      ],
      "ko": [
        "metric",
        "trace span",
        "감사 policy rule",
        "log line"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A metric is a numeric time series, so latency thresholds can be evaluated over time. A trace span shows one request path, an audit policy defines collection, and a log line is an individual event.",
      "ko": "metric은 numeric time series이므로 시간에 따른 latency threshold를 평가할 수 있습니다. trace span은 한 request path를 보여주고 audit policy는 수집 규칙이며 log line은 개별 event입니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-384",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Tracing · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What does a distributed trace help an operator see?",
      "ko": "distributed trace가 operator에게 보여주는 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "The full contents of every Secret",
        "A request path and timing across services",
        "Which user may create a Role",
        "The cryptographic key for an image"
      ],
      "ko": [
        "모든 Secret의 전체 콘텐츠",
        "service 사이 request path와 timing",
        "어떤 user가 Role을 create할 수 있는지",
        "image의 cryptographic key"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Traces connect spans across a request path; they are not a substitute for authorization or audit logs.",
      "ko": "trace는 request path의 span을 연결하며 authorization 또는 audit log를 대체하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-385",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Centralized observability · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "For Kubernetes audit and workload logs, what is a useful security property of centralized retention?",
      "ko": "Kubernetes audit와 workload log에서 centralized retention의 유용한 보안 property는 무엇입니까?"
    },
    "choices": {
      "en": [
        "All Kubernetes logs are public",
        "Kubernetes logs become automatically accurate",
        "Events from the API server and workloads can be correlated and retained under access control",
        "Metrics stop being needed"
      ],
      "ko": [
        "모든 Kubernetes log가 공개됨",
        "Kubernetes log가 자동으로 accurate해짐",
        "API server와 workload의 event를 상관 분석하고 access control 아래 보존할 수 있음",
        "metric이 필요 없어짐"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Central retention supports correlation of Kubernetes audit events with workload events, while integrity and access policies protect the records.",
      "ko": "central retention은 Kubernetes 감사 event와 workload event의 correlation을 지원하고 integrity와 access policy가 record를 보호합니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/"
  },
  {
    "id": "local-386",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Service mesh identity · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What is a common service-mesh security capability?",
      "ko": "일반적인 service-mesh 보안 capability는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Granting every service cluster-admin",
        "Replacing the Kubernetes API server",
        "Building all container images",
        "Consistent service-to-service identity and encrypted transport policy"
      ],
      "ko": [
        "모든 service에 cluster-admin 부여",
        "Kubernetes API server 대체",
        "모든 container image build",
        "일관된 service-to-service identity와 encrypted transport policy"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "A mesh can standardize peer identity and transport policy, but application authorization remains necessary.",
      "ko": "mesh는 peer identity와 transport policy를 표준화할 수 있지만 application authorization은 필요합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/cluster-administration/addons/"
  },
  {
    "id": "local-387",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Service mesh authorization · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Why does mTLS not replace application authorization?",
      "ko": "mTLS가 application authorization을 대체하지 않는 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "It identifies transport peers but does not decide which business operation a peer may perform",
        "It provides encryption and peer authentication but not method-level authorization",
        "It replaces the need for service authorization policy",
        "It grants every authenticated peer the same business role"
      ],
      "ko": [
        "transport peer를 식별하지만 어떤 business operation을 수행할지는 결정하지 않음",
        "encryption과 peer authentication은 제공하지만 method-level authorization은 제공하지 않음",
        "service authorization policy가 필요 없어짐",
        "모든 authenticated peer에 같은 business role을 부여함"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "mTLS authenticates the transport peers and encrypts their connection, but it does not know whether that peer may read or mutate a particular business object. Application authorization must make that decision.",
      "ko": "mTLS는 transport peer를 authentication하고 connection을 encryption하지만 해당 peer가 특정 business object를 read·mutate할 수 있는지는 결정하지 않습니다. 그 판단은 application authorization이 해야 합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/cluster-administration/addons/"
  },
  {
    "id": "local-388",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "PKI lifecycle · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which PKI practice protects a compromised service certificate?",
      "ko": "compromised service certificate를 보호하는 PKI practice는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Copy the private key to every Pod",
        "Revoke it, issue a replacement, and limit certificate validity",
        "Disable certificate verification",
        "Use the certificate forever"
      ],
      "ko": [
        "비공개 key를 모든 Pod에 복사함",
        "revoke하고 replacement를 발급하며 certificate validity를 제한함",
        "certificate verification을 비활성화함",
        "certificate를 영구 사용함"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Short validity, protected keys, and revocation reduce misuse after compromise.",
      "ko": "짧은 validity, 보호된 key와 revocation은 compromise 후 misuse를 줄입니다."
    },
    "ref": "https://kubernetes.io/docs/setup/best-practices/certificates/"
  },
  {
    "id": "local-389",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "PKI trust · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What does a CA certificate allow a client to verify?",
      "ko": "CA certificate로 client가 verify할 수 있는 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "That the request is authorized for every path",
        "That the service is free of bugs",
        "That a presented certificate chains to a trusted issuer",
        "That a Pod has no resource limit"
      ],
      "ko": [
        "request가 모든 path에 authorized인지",
        "service에 bug가 없는지",
        "제시된 certificate가 trusted issuer로 chain되는지",
        "Pod에 resource limit이 없는지"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "A trusted CA helps validate certificate issuer and identity; it does not grant application permission.",
      "ko": "trusted CA는 certificate issuer와 identity를 validate하는 데 도움을 주지만 application 권한을 부여하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/setup/best-practices/certificates/"
  },
  {
    "id": "local-390",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Connectivity policy · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which connectivity control limits which namespace can reach an internal Service?",
      "ko": "어떤 connectivity control이 어느 namespace가 internal Service에 접근할지 제한합니까?"
    },
    "choices": {
      "en": [
        "A default-deny NetworkPolicy without a source allowance",
        "A ServiceAccount RoleBinding",
        "An Ingress path rule",
        "A NetworkPolicy selecting allowed source namespaces and destination Pods"
      ],
      "ko": [
        "source allowance 없는 default-deny NetworkPolicy",
        "ServiceAccount RoleBinding",
        "Ingress path rule",
        "허용된 source namespace와 destination Pod를 선택하는 NetworkPolicy"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "A NetworkPolicy can select the allowed source namespaces and destination Pods to control network connectivity. RoleBinding controls API permissions, Ingress routes HTTP, and a default deny without an allowance blocks the intended client.",
      "ko": "NetworkPolicy는 허용된 source namespace와 destination Pod를 선택해 network connectivity를 제어합니다. RoleBinding은 API 권한을 다루고 Ingress는 HTTP를 route하며 allowance 없는 default deny는 의도한 client도 차단합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/"
  },
  {
    "id": "local-391",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Connectivity exposure · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What is the risk of exposing an internal administrative Service through a public LoadBalancer?",
      "ko": "internal administrative Service를 공개된 LoadBalancer로 노출하는 risk는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Untrusted network clients gain a reachable path to sensitive operations",
        "The Service becomes unable to use TLS",
        "The image digest changes",
        "The namespace is deleted"
      ],
      "ko": [
        "untrusted network client가 sensitive operation으로 가는 reachable path를 얻음",
        "Service가 TLS를 사용할 수 없게 됨",
        "image digest가 변경됨",
        "namespace가 삭제됨"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Public reachability expands the threat boundary; restrict exposure and require strong identity and authorization.",
      "ko": "공개된 reachability는 threat boundary를 넓히므로 노출을 제한하고 강한 identity와 authorization을 요구해야 합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/"
  },
  {
    "id": "local-392",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Admission control · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What does an admission controller do in a supply-chain policy?",
      "ko": "supply-chain policy에서 admission controller는 무엇을 합니까?"
    },
    "choices": {
      "en": [
        "It builds the image after the Pod starts",
        "It can reject or mutate a workload request based on image or configuration rules",
        "It stores all audit events in etcd",
        "It replaces the CNI"
      ],
      "ko": [
        "Pod 시작 후 image를 build함",
        "image 또는 configuration rule에 따라 workload request를 reject하거나 mutate함",
        "모든 감사 event를 etcd에 저장함",
        "CNI를 대체함"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Admission is a gate before persistence or execution; it can enforce policy such as approved registries or signatures.",
      "ko": "admission은 persistence 또는 execution 전 gate이며 approved registry나 signature 같은 policy를 enforce할 수 있습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/"
  },
  {
    "id": "local-393",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Admission image policy · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which admission rule is most appropriate for a production namespace?",
      "ko": "production namespace에 가장 적절한 admission rule은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Skip validation for administrator requests",
        "Allow every image with privileged mode",
        "Require approved registries and immutable digests",
        "Accept unsigned images from any registry"
      ],
      "ko": [
        "관리자 request의 validation을 건너뜀",
        "모든 image에 privileged mode를 허용함",
        "approved registry와 immutable digest를 요구함",
        "모든 registry의 unsigned image를 허용함"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "A rule can require provenance and immutable content while still applying documented exceptions through controlled review.",
      "ko": "rule은 provenance와 immutable 콘텐츠를 요구하고 controlled review를 통해 documented exception을 적용할 수 있습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/"
  },
  {
    "id": "local-394",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Image scanning · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which statement about image vulnerability scanning is correct?",
      "ko": "image vulnerability scanning에 대한 올바른 설명은 무엇입니까?"
    },
    "choices": {
      "en": [
        "It authenticates every ServiceAccount",
        "It guarantees no future vulnerabilities",
        "It replaces runtime isolation",
        "It finds known issues in scanned content but cannot prove vulnerability-free behavior"
      ],
      "ko": [
        "모든 ServiceAccount를 authenticate함",
        "future vulnerability가 없음을 보장함",
        "runtime 격리을 대체함",
        "scan한 콘텐츠에서 known issue를 찾지만 vulnerability-free behavior를 증명할 수 없음"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Scanning has database, timing, and coverage limits; layered controls remain necessary.",
      "ko": "scanning은 database, timing과 coverage 한계가 있으므로 layered control이 필요합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/containers/images/"
  },
  {
    "id": "local-395",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Audit observability · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which observability signal records an API request identity and verb?",
      "ko": "API request identity와 verb를 기록하는 observability signal은 무엇입니까?"
    },
    "choices": {
      "en": [
        "An audit event",
        "A metric label only",
        "A trace sampling decision only",
        "An image digest"
      ],
      "ko": [
        "감사 event",
        "metric label만",
        "trace sampling decision만",
        "image digest"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Audit events capture API activity and principal context; metrics and traces answer different questions.",
      "ko": "감사 event는 API activity와 principal context를 기록하며 metric과 trace는 다른 질문에 답합니다."
    },
    "ref": "https://kubernetes.io/docs/tasks/debug/debug-cluster/audit/"
  },
  {
    "id": "local-396",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Telemetry data protection · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Why should trace data be access-controlled?",
      "ko": "trace data를 access-controlled해야 하는 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Traces are always encrypted at source",
        "Spans may contain URLs, identifiers, or payload metadata about requests",
        "Access control would disable mTLS",
        "Trace data is never useful"
      ],
      "ko": [
        "trace는 source에서 항상 encryption되기 때문",
        "span에 request의 URL, identifier 또는 payload metadata가 포함될 수 있기 때문",
        "access control이 mTLS를 비활성화하기 때문",
        "trace data가 절대 유용하지 않기 때문"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Telemetry can expose sensitive context, so collection, redaction, retention, and readers need policy.",
      "ko": "telemetry는 sensitive context를 노출할 수 있어 collection, redaction, retention과 reader에 policy가 필요합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-397",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "PKI key handling · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which PKI key should be kept secret in a service certificate system?",
      "ko": "service certificate system에서 비밀로 유지해야 할 PKI key는 무엇입니까?"
    },
    "choices": {
      "en": [
        "The CA name",
        "The public certificate",
        "The private key",
        "The certificate serial number"
      ],
      "ko": [
        "CA name",
        "공개된 certificate",
        "비공개 key",
        "certificate serial number"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Possession of the private key enables impersonation; public certificates are distributed for verification.",
      "ko": "비공개 key를 가지면 impersonation이 가능하며 공개된 certificate는 verification을 위해 배포합니다."
    },
    "ref": "https://kubernetes.io/docs/setup/best-practices/certificates/"
  },
  {
    "id": "local-398",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Certificate rotation · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is a benefit of rotating service certificates before expiry?",
      "ko": "만료 전에 service certificate를 rotation하는 이점은 무엇입니까?"
    },
    "choices": {
      "en": [
        "It changes the Pod image",
        "It removes the need for trust roots",
        "It makes every operation authorized",
        "It limits the lifetime of a leaked credential and avoids abrupt expiry outages"
      ],
      "ko": [
        "Pod image가 변경됨",
        "trust root가 필요 없어짐",
        "모든 operation이 authorized가 됨",
        "leaked credential의 lifetime을 제한하고 abrupt 만료 outage를 피함"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Planned rotation reduces exposure and allows validation before old credentials expire.",
      "ko": "계획된 rotation은 노출을 줄이고 old credential이 만료되기 전에 validation을 가능하게 합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-399",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Admission timing · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which control checks a workload before it is admitted based on policy?",
      "ko": "policy에 따라 workload가 admit되기 전에 check하는 control은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Admission control",
        "Service discovery",
        "Container stdout",
        "Node autoscaling"
      ],
      "ko": [
        "admission control",
        "Service discovery",
        "container stdout",
        "node autoscaling"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Admission control evaluates API requests before they become stored or running objects.",
      "ko": "admission control은 API request가 저장되거나 실행되는 object가 되기 전에 평가합니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/"
  },
  {
    "id": "local-400",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Image repository access · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "What is the security benefit of a private image repository?",
      "ko": "비공개 image repository의 보안 이점은 무엇입니까?"
    },
    "choices": {
      "en": [
        "It restricts access but does not prove artifact safety",
        "It restricts who can read or write artifacts and supports auditability",
        "It does not remove the need for signatures",
        "Tag immutability requires an explicit registry setting"
      ],
      "ko": [
        "access를 제한하지만 artifact safety를 증명하지 않음",
        "artifact를 read 또는 write할 주체를 제한하고 auditability를 지원함",
        "signature 필요성을 제거하지 않음",
        "tag immutability에는 명시적 registry setting이 필요함"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Repository permissions determine which identities may read or write artifacts and leave an audit trail of those actions. They do not prove artifact safety or eliminate signature checks, and immutability needs explicit registry policy.",
      "ko": "repository permission은 어떤 identity가 artifact를 read·write할 수 있는지 결정하고 그 action의 audit trail을 남깁니다. 이것만으로 artifact 안전성이 증명되거나 signature check가 불필요해지지 않으며 immutability에는 별도 registry policy가 필요합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/containers/images/"
  },
  {
    "id": "local-401",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Service mesh workload identity · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "How does a service mesh commonly obtain workload identity?",
      "ko": "service mesh는 일반적으로 workload identity를 어떻게 얻습니까?"
    },
    "choices": {
      "en": [
        "From a Kubernetes Service name alone",
        "From a namespace label alone",
        "Through certificates or tokens issued by a trust system",
        "From a source IP without credential material"
      ],
      "ko": [
        "Kubernetes Service name만으로",
        "namespace label만으로",
        "trust system이 발급한 certificate 또는 token을 통해",
        "credential material 없는 source IP에서"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "A service mesh can issue workload certificates or tokens from a trusted identity system and present them during connection setup. A Service name, namespace label, or source IP alone is not cryptographic identity.",
      "ko": "service mesh는 trusted identity system에서 발급한 workload certificate나 token을 connection setup에 사용합니다. Service name, namespace label과 source IP만으로는 cryptographic identity가 되지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/cluster-administration/addons/"
  },
  {
    "id": "local-402",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Connectivity segmentation · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which connectivity design reduces lateral movement between front end and database?",
      "ko": "front end와 database 사이 lateral movement를 줄이는 connectivity 설계는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Use one shared administrator credential",
        "Allow all namespaces to use hostNetwork",
        "Expose the database publicly",
        "Permit only the required port and direction with network policy"
      ],
      "ko": [
        "하나의 shared 관리자 credential을 사용함",
        "모든 namespace가 hostNetwork를 사용하게 함",
        "database를 외부에 공개함",
        "network policy로 필요한 port와 direction만 허용함"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Narrow reachability limits the paths available after a front-end compromise.",
      "ko": "좁은 reachability는 front-end compromise 후 이용 가능한 path를 제한합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/"
  },
  {
    "id": "local-403",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Admission provenance gate · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What should an admission policy do with an image that lacks required provenance?",
      "ko": "required provenance가 없는 image에 admission policy는 무엇을 해야 합니까?"
    },
    "choices": {
      "en": [
        "Reject or quarantine it according to a documented production policy",
        "Silently grant it privileged access",
        "Convert it to a signed image without evidence",
        "Delete unrelated audit logs"
      ],
      "ko": [
        "documented production policy에 따라 reject 또는 quarantine함",
        "조용히 privileged access를 부여함",
        "evidence 없이 signed image로 변환함",
        "무관한 audit log를 삭제함"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Admission should apply an explicit, reviewable decision; it cannot invent trustworthy provenance.",
      "ko": "admission은 명시적이고 review 가능한 결정을 적용해야 하며 trustworthy provenance를 만들어낼 수 없습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/"
  },
  {
    "id": "local-404",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Security alerting · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which observability practice helps detect unusual Secret reads?",
      "ko": "비정상적인 Secret read를 감지하는 observability practice는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Alert on aggregate CPU without API audit context",
        "Alert on audit events for Secret reads by unexpected identities or namespaces",
        "Alert on Secret-read events without checking the requesting identity",
        "Alert on image digest changes"
      ],
      "ko": [
        "API audit context 없이 aggregate CPU에 alert함",
        "예상하지 않은 identity 또는 namespace의 Secret read 감사 event에 alert함",
        "requesting identity를 확인하지 않고 Secret-read event에 alert함",
        "image digest change에 alert함"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Audit events include the requesting identity and namespace, so an alert can distinguish an unexpected Secret read from an approved one. CPU, digest, or identity-blind alerts do not provide that attribution.",
      "ko": "audit event에는 request identity와 namespace가 포함되므로 승인된 read와 예상 밖 Secret read를 구분해 alert할 수 있습니다. CPU·digest alert나 identity를 확인하지 않는 alert는 attribution을 제공하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-405",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "PKI endpoint validation · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "What does certificate hostname validation protect against?",
      "ko": "certificate hostname validation은 무엇을 보호합니까?"
    },
    "choices": {
      "en": [
        "A missing RBAC verb",
        "A workload exceeding its memory limit",
        "A client connecting to an impostor endpoint presenting an unrelated certificate",
        "A vulnerable package in an image"
      ],
      "ko": [
        "RBAC verb가 누락됨",
        "workload가 memory 제한을 초과함",
        "무관한 certificate를 제시하는 impostor endpoint에 client가 연결함",
        "image의 vulnerable package"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "Hostname and chain validation help confirm the endpoint identity during TLS; other risks need separate controls.",
      "ko": "hostname과 chain validation은 TLS 중 endpoint identity를 확인하며 다른 risk에는 별도 control이 필요합니다."
    },
    "ref": "https://kubernetes.io/docs/setup/best-practices/certificates/"
  },
  {
    "id": "local-406",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Deployment observability · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Why should a platform record image digest alongside deployment metadata?",
      "ko": "platform이 배포 metadata와 함께 image digest를 기록해야 하는 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "It prevents all runtime attacks",
        "It ensures the image can never be revoked",
        "It replaces admission policy",
        "It supports reproducibility and incident reconstruction of the exact content run"
      ],
      "ko": [
        "모든 runtime 공격을 방지함",
        "image가 절대 폐기되지 않음을 보장함",
        "admission policy를 대신함",
        "실행한 정확한 콘텐츠의 재현성과 사고 재구성을 지원함"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "The digest ties a deployment to exact bytes, aiding rollback and investigation without claiming perfect security.",
      "ko": "digest는 배포를 정확한 바이트에 연결하며 완벽한 보안을 보장하지는 않지만 롤백과 조사를 돕습니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-407",
    "exam": "kcsa",
    "domain": "Platform Security",
    "subtopic": "Build attestation · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which supply-chain control verifies that a release was built by the approved pipeline?",
      "ko": "release가 approved pipeline에서 build되었는지 verify하는 supply-chain control은 무엇입니까?"
    },
    "choices": {
      "en": [
        "Signed build provenance checked against an allowed identity",
        "An SBOM listing package contents",
        "A vulnerability scan report",
        "A digest pin on the image"
      ],
      "ko": [
        "allowed identity에 대해 check하는 signed build provenance",
        "package 콘텐츠를 나열하는 SBOM",
        "취약점 scan report",
        "image digest pin"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Signed build provenance binds the release to an attested pipeline identity, which is the evidence needed for approved-builder verification. An SBOM, vulnerability report, or digest describes contents or identity differently.",
      "ko": "signed build provenance는 release를 attested pipeline identity에 연결하므로 approved builder 검증에 필요한 evidence를 제공합니다. SBOM, vulnerability report와 digest는 각각 content나 artifact identity에 관한 다른 정보를 제공합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/"
  },
  {
    "id": "local-408",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Compliance frameworks · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "A Kubernetes RBAC review is due. Which evidence best demonstrates that access was reviewed rather than merely configured?",
      "ko": "Kubernetes RBAC review 기한이 되었습니다. access가 단지 설정된 것이 아니라 review되었음을 가장 잘 보여주는 evidence는 무엇입니까?"
    },
    "choices": {
      "en": [
        "A dated export of Roles and RoleBindings with reviewers, decisions, and remediation tickets",
        "A current RoleBinding export with no reviewer decision",
        "An access-control policy document with no execution evidence",
        "A one-time authorization output without a date, scope, or reviewer"
      ],
      "ko": [
        "날짜, reviewer, decision과 remediation ticket이 포함된 Role 및 RoleBinding export",
        "reviewer decision 없는 current RoleBinding export",
        "execution evidence 없는 access-control policy 문서",
        "date, 범위 또는 reviewer가 없는 일회성 authorization output"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "A dated export plus reviewer decisions and remediation tickets shows that access was evaluated and acted upon. A current configuration or undated authorization output proves setup, not review.",
      "ko": "날짜가 있는 export에 reviewer decision과 remediation ticket이 함께 있으면 access를 평가하고 조치했음을 보여줍니다. current configuration이나 날짜 없는 authorization output은 설정만 증명할 뿐 review를 증명하지 않습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/rbac/"
  },
  {
    "id": "local-409",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Compliance evidence · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "A team claims that a namespace cannot read a Secret after an RBAC change. Which evidence most directly tests that claim?",
      "ko": "팀이 RBAC 변경 후 namespace가 Secret을 읽을 수 없다고 주장합니다. 이 claim을 가장 직접적으로 test하는 evidence는 무엇입니까?"
    },
    "choices": {
      "en": [
        "A dated `kubectl auth can-i get secrets` result for the relevant ServiceAccount, plus the applied RoleBinding",
        "A Role manifest showing intended grants without an effective check",
        "An audit-policy configuration without a corresponding Secret-read event",
        "A dated Deployment rollout record"
      ],
      "ko": [
        "해당 ServiceAccount에 대한 날짜가 있는 `kubectl auth can-i get secrets` 결과와 적용된 RoleBinding",
        "effective check 없는 intended grant를 보여주는 Role manifest",
        "Secret-read event 없는 audit-policy configuration",
        "date가 있는 Deployment rollout record"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The dated `auth can-i` result tests effective permission for the specific ServiceAccount, and the RoleBinding explains the grant in force. A manifest or audit policy alone does not prove the denied operation.",
      "ko": "날짜가 있는 `auth can-i` 결과는 특정 ServiceAccount의 effective permission을 테스트하고 RoleBinding은 적용된 grant를 설명합니다. manifest나 audit policy만으로는 거부된 operation을 증명할 수 없습니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/rbac/"
  },
  {
    "id": "local-410",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Threat Modelling Frameworks · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "During threat modelling for a Kubernetes admission path, what does STRIDE classify?",
      "ko": "Kubernetes admission path에 대한 threat modelling에서 STRIDE는 무엇을 classify합니까?"
    },
    "choices": {
      "en": [
        "Kubernetes image-admission failure modes only",
        "Kubernetes RBAC resource permissions",
        "Threat categories such as spoofing, tampering, repudiation, information disclosure, denial of service, and elevation of privilege",
        "Pod Security Admission audit events only"
      ],
      "ko": [
        "Kubernetes image-admission failure mode만",
        "Kubernetes RBAC resource 권한",
        "spoofing, tampering, repudiation, information disclosure, denial of service와 elevation of privilege 같은 threat category",
        "Pod 보안 Admission 감사 event만"
      ]
    },
    "answer": 2,
    "explain": {
      "en": "STRIDE classifies threat categories for the admission path; the resulting analysis complements concrete Kubernetes controls such as RBAC, admission policy, and audit logging.",
      "ko": "STRIDE는 admission path의 threat category를 분류합니다. 분석 결과는 RBAC, admission policy와 감사 로깅 같은 구체적인 Kubernetes control을 보완합니다."
    },
    "ref": "https://owasp.org/www-community/Threat_Modeling"
  },
  {
    "id": "local-411",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Threat-model governance · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "A threat model for a Kubernetes admission webhook records that the webhook trusts a signing key and receives requests from the API server. Why record those assumptions and owners?",
      "ko": "Kubernetes admission webhook threat model에 webhook이 signing key를 신뢰하고 API server에서 request를 받는다는 가정을 기록합니다. assumption과 owner를 기록해야 하는 이유는 무엇입니까?"
    },
    "choices": {
      "en": [
        "The assumptions can be revalidated when the webhook, key, or trust boundary changes",
        "Documenting assumptions makes the webhook impossible to attack",
        "Owners automatically receive cluster-admin",
        "A threat model removes the need for webhook authentication"
      ],
      "ko": [
        "webhook, key 또는 trust boundary가 바뀔 때 assumption을 다시 검증할 수 있음",
        "assumption을 기록하면 webhook을 공격할 수 없게 됨",
        "owner가 자동으로 cluster-admin을 받음",
        "threat model이 webhook authentication 필요성을 없앰"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Named assumptions and owners make the API-server trust boundary reviewable after configuration or key changes.",
      "ko": "이름이 지정된 assumption과 owner는 configuration 또는 key 변경 후 API-server trust boundary를 review 가능하게 합니다."
    },
    "ref": "https://owasp.org/www-community/Threat_Modeling"
  },
  {
    "id": "local-412",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Supply-chain compliance · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "A registry admission control allows an image only when its provenance and signature evidence are present. What does this supply-chain control demonstrate?",
      "ko": "registry admission control이 provenance와 signature evidence가 있는 image만 허용합니다. 이 supply-chain control은 무엇을 보여줍니까?"
    },
    "choices": {
      "en": [
        "Artifact origin, integrity, and approval evidence can be checked before a Kubernetes workload uses the image",
        "Unsigned production images are always safe",
        "Dependency inventory can be skipped",
        "Build records should be hidden"
      ],
      "ko": [
        "Kubernetes workload가 image를 사용하기 전에 artifact origin, integrity와 approval evidence를 확인할 수 있음",
        "unsigned production image는 항상 안전함",
        "dependency inventory를 생략할 수 있음",
        "build record를 숨겨야 함"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Admission can enforce that image provenance and signature evidence accompany the artifact; it does not make unsigned images safe.",
      "ko": "admission은 image provenance와 signature evidence가 artifact와 함께 있는지 enforce할 수 있지만 unsigned image를 안전하게 만들지는 않습니다."
    },
    "ref": "https://slsa.dev/spec/v1.2/"
  },
  {
    "id": "local-413",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Supply-chain inventory · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "A Kubernetes release team wants to audit libraries packaged in an image. Which artifact should they retain?",
      "ko": "Kubernetes release team이 image에 packaged된 library를 audit하려고 합니다. 어떤 artifact를 보존해야 합니까?"
    },
    "choices": {
      "en": [
        "A signed image provenance attestation",
        "An SBOM attached to the image or release record",
        "A vulnerability scan report summary",
        "A signature verification result"
      ],
      "ko": [
        "signed image provenance attestation",
        "image 또는 release 기록에 연결된 SBOM",
        "취약점 scan report summary",
        "signature 검증 결과"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "An SBOM lists the libraries and versions packaged in the image, giving auditors an inventory to review. Provenance, scan summaries, and signature results answer origin or risk questions but do not replace that inventory.",
      "ko": "SBOM은 image에 포함된 library와 version을 나열해 auditor가 검토할 inventory를 제공합니다. provenance, scan summary와 signature result는 origin이나 risk에 관한 다른 질문에 답합니다."
    },
    "ref": "https://slsa.dev/spec/v1.2/"
  },
  {
    "id": "local-414",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Compliance scope · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "A reviewer approves an exception for one namespace's privileged Pod admission policy. What scope must the evidence identify?",
      "ko": "reviewer가 한 namespace의 privileged Pod admission policy exception을 승인합니다. evidence에 어떤 범위를 명시해야 합니까?"
    },
    "choices": {
      "en": [
        "The namespace, affected admission rule, approved workload, expiry, and compensating control",
        "Every namespace in the cluster regardless of the request",
        "Only the reviewer's username",
        "A claim that all future Pods are safe"
      ],
      "ko": [
        "namespace, 해당 admission rule, 승인된 workload, 만료와 compensating control",
        "request와 관계없이 cluster의 모든 namespace",
        "reviewer username만",
        "향후 모든 Pod가 안전하다는 claim"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Namespace and rule scope prevent a narrow exception from being reused for unrelated workloads; expiry and compensating controls bound the risk.",
      "ko": "namespace와 rule 범위는 좁은 exception이 관계없는 workload에 재사용되지 않게 하며 만료와 compensating control은 risk를 제한합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/pod-security-admission/"
  },
  {
    "id": "local-415",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Automation and tooling · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "A validating admission policy rejects a Deployment because its container uses a mutable image tag. What should the automation preserve for an auditable remediation?",
      "ko": "validating admission policy가 mutable image tag를 사용하는 Deployment를 거부합니다. audit 가능한 remediation을 위해 automation은 무엇을 보존해야 합니까?"
    },
    "choices": {
      "en": [
        "The failed rule, object and namespace, evaluated image reference, decision, and approved exception if any",
        "A silent bypass for all future Deployments",
        "Deletion of the rejection event",
        "A policy record missing the relevant scope or review evidence"
      ],
      "ko": [
        "failed rule, object와 namespace, 평가된 image reference, decision과 승인된 exception(있는 경우)",
        "향후 모든 Deployment에 대한 silent bypass",
        "rejection event 삭제",
        "관련 범위나 검토 evidence가 빠진 policy record"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Structured admission evidence lets an owner reproduce the failure, remediate the manifest, and show any bounded exception.",
      "ko": "구조화된 admission evidence는 owner가 failure를 재현하고 manifest를 수정하며 제한된 exception을 제시하게 합니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/"
  },
  {
    "id": "local-416",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Compliance automation · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "Which practice makes a Kubernetes admission control repeatable across releases?",
      "ko": "Kubernetes admission control을 release마다 repeatable하게 만드는 practice는 무엇입니까?"
    },
    "choices": {
      "en": [
        "Versioned policy tests run against manifests in the delivery workflow",
        "A one-time policy evaluation with no versioned input",
        "A manual approval recorded outside the delivery workflow",
        "An unversioned policy file applied from a mutable tag"
      ],
      "ko": [
        "delivery workflow에서 manifest에 대해 실행되는 버전 관리된 policy test",
        "버전 관리된 input 없는 일회성 policy 평가",
        "delivery workflow 외부에 기록된 수동 승인",
        "mutable tag에서 적용한 un버전 관리된 policy 파일"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Versioned policy tests run against versioned manifests make admission decisions repeatable and reviewable across releases. A one-time check, outside approval, or mutable unversioned policy cannot reproduce the same input reliably.",
      "ko": "버전 관리된 manifest에 versioned policy test를 실행하면 release마다 admission decision을 반복하고 review할 수 있습니다. 일회성 check나 mutable unversioned policy는 같은 input을 안정적으로 재현하지 못합니다."
    },
    "ref": "https://kubernetes.io/docs/reference/access-authn-authz/admission-controllers/"
  },
  {
    "id": "local-417",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Threat Modelling Frameworks · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "A Kubernetes team models attacker behavior against image admission and RBAC escalation. Which framework catalogs adversary tactics and techniques?",
      "ko": "Kubernetes team이 image admission과 RBAC escalation에 대한 attacker behavior를 modelling합니다. adversary tactic과 technique를 catalog하는 framework는 무엇입니까?"
    },
    "choices": {
      "en": [
        "SBOM",
        "ATT&CK",
        "RBAC",
        "Pod Security Admission"
      ],
      "ko": [
        "SBOM",
        "ATT&CK",
        "RBAC",
        "Pod 보안 Admission"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "MITRE ATT&CK catalogs adversary tactics and techniques that can structure analysis of Kubernetes attack paths; STRIDE categorizes threat types and serves a different purpose.",
      "ko": "MITRE ATT&CK는 Kubernetes attack path 분석을 구조화할 수 있는 adversary tactic과 technique를 catalog합니다. STRIDE는 threat type을 분류하는 다른 목적을 가집니다."
    },
    "ref": "https://attack.mitre.org/"
  },
  {
    "id": "local-418",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Compliance ownership · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "For an audit of a Kubernetes Secret protection control, what should its owner maintain?",
      "ko": "Kubernetes Secret 보안 통제를 감사하기 위해 담당자가 유지해야 하는 것은 무엇입니까?"
    },
    "choices": {
      "en": [
        "The control description, responsible role, evidence location, and review cadence",
        "A Secret encryption configuration without an assigned owner or review cadence",
        "An RBAC Role granting Secret access without an evidence location",
        "A dashboard showing Secret counts without a control test"
      ],
      "ko": [
        "통제 설명, 담당 역할, evidence 위치와 검토 주기",
        "담당자나 검토 주기가 없는 Secret encryption configuration",
        "evidence 위치가 없는 Secret access RBAC Role",
        "통제 테스트가 없는 Secret count dashboard"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "An auditable control record names what protects the Secret, who owns it, where evidence is stored, and when it is reviewed. A configuration, Role, or dashboard alone omits ownership or proof of the control test.",
      "ko": "audit 가능한 control record에는 Secret을 어떻게 보호하는지, 담당자, evidence 위치와 review 시점을 적습니다. configuration·Role·dashboard만으로는 담당자나 control test evidence가 빠집니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/configuration/secret/"
  },
  {
    "id": "local-419",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Supply-chain licensing · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "A container release includes an SBOM and license notices. Which statement is accurate for a Kubernetes supply-chain review?",
      "ko": "container release에 SBOM과 license notice가 포함되어 있습니다. Kubernetes supply-chain review에 대해 정확한 설명은 무엇입니까?"
    },
    "choices": {
      "en": [
        "License notices address component obligations but do not replace vulnerability scanning or image-signature checks",
        "Every license grants production admin",
        "Licenses determine Pod scheduling",
        "Licenses make the image immutable"
      ],
      "ko": [
        "license notice는 component 의무를 다루지만 vulnerability scan이나 image-signature check를 대체하지 않음",
        "모든 license가 production admin을 부여함",
        "license가 Pod scheduling을 결정함",
        "license가 image를 immutable하게 만듦"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "SBOM and license evidence address component inventory and usage obligations; vulnerability and signature controls remain separate security checks.",
      "ko": "SBOM과 license evidence는 component inventory와 usage 의무를 다루며 vulnerability와 signature control은 별도의 보안 check로 남습니다."
    },
    "ref": "https://slsa.dev/spec/v1.2/"
  },
  {
    "id": "local-420",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Compliance exceptions · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "A Pod Security admission exception permits privileged Pods in one namespace. What evidence keeps that exception bounded?",
      "ko": "Pod 보안 admission exception이 한 namespace에서 privileged Pod를 허용합니다. 어떤 evidence가 exception을 제한된 범위로 유지합니까?"
    },
    "choices": {
      "en": [
        "A named owner, namespace and rule scope, expiry, approval, and compensating controls",
        "A namespace label set to privileged with no owner or expiry recorded",
        "A cluster-wide PSA exemption for the requesting user",
        "An approval ticket naming the workload but not namespace scope or expiry"
      ],
      "ko": [
        "지정된 담당자, namespace와 rule 범위, 만료, 승인 및 보완 통제",
        "owner나 만료가 기록되지 않은 privileged namespace label",
        "requesting user를 위한 cluster-wide PSA exemption",
        "workload는 명시하지만 namespace 범위나 만료가 없는 approval ticket"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "An exception is reviewable only when its owner, namespace and rule scope, expiry, approval, and compensating controls are recorded. A broad label, cluster-wide exemption, or ticket without scope and expiry cannot bound the exception.",
      "ko": "exception을 review하려면 owner, namespace와 rule 범위, expiry, approval과 compensating control을 기록해야 합니다. broad label이나 cluster-wide exemption, scope와 expiry 없는 ticket은 exception 범위를 제한하지 못합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/pod-security-admission/"
  },
  {
    "id": "local-421",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Supply-chain evidence · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "Which evidence supports image immutability in a release record?",
      "ko": "release 기록에서 image 불변성을 뒷받침하는 evidence는 무엇입니까?"
    },
    "choices": {
      "en": [
        "An image tag recorded without a digest",
        "The exact digest and a verified reference to the approved artifact",
        "A signed tag without its resolved digest",
        "A registry immutability setting without a deployment reference"
      ],
      "ko": [
        "digest 없이 기록된 image tag",
        "정확한 digest와 승인된 아티팩트에 대한 검증된 참조",
        "확정된 digest가 없는 서명된 tag",
        "배포 참조가 없는 registry immutability setting"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Recording the exact digest and a verified approved-artifact reference ties the deployment to immutable bytes. A tag, unresolved signed tag, or registry setting without deployment reference cannot identify what actually ran.",
      "ko": "정확한 digest와 검증된 approved-artifact reference를 기록하면 deployment를 immutable byte에 연결할 수 있습니다. tag나 resolve되지 않은 signed tag, deployment reference 없는 registry setting은 실제 실행된 content를 식별하지 못합니다."
    },
    "ref": "https://slsa.dev/spec/v1.2/"
  },
  {
    "id": "local-422",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Continuous compliance · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "A daily scan finds that a namespace's NetworkPolicy was removed after a cluster review. What should continuous compliance tooling do?",
      "ko": "daily scan에서 cluster review 후 namespace의 NetworkPolicy가 삭제된 것을 발견했습니다. continuous compliance tooling은 무엇을 해야 합니까?"
    },
    "choices": {
      "en": [
        "Record the drift, identify the namespace and change, and route remediation without hiding the finding",
        "Make the exception invisible",
        "Replace every human decision",
        "Disable deployment audit logs"
      ],
      "ko": [
        "drift를 기록하고 namespace와 변경을 식별하며 finding을 숨기지 않고 remediation을 전달함",
        "exception을 보이지 않게 함",
        "모든 human decision을 대체함",
        "deployment audit log를 비활성화함"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "Repeated scans reveal post-review NetworkPolicy drift and preserve enough context for an owner to restore the intended control.",
      "ko": "반복 scan은 review 후 NetworkPolicy drift를 드러내고 owner가 intended control을 복구할 context를 보존합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/services-networking/network-policies/"
  },
  {
    "id": "local-423",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Threat-model controls · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "A threat model for a Kubernetes Service identifies cross-namespace access as a threat. Which activity connects it to a mitigation?",
      "ko": "Kubernetes Service threat model이 cross-namespace access를 threat로 식별했습니다. 어떤 activity가 이를 mitigation에 연결합니까?"
    },
    "choices": {
      "en": [
        "Granting every workload the same Role",
        "Changing a Service port without review",
        "Deleting the threat register",
        "Recording threat-to-control traceability to RBAC and NetworkPolicy changes"
      ],
      "ko": [
        "모든 workload에 같은 Role 부여",
        "review 없이 Service port 변경",
        "threat register 삭제",
        "threat를 RBAC와 NetworkPolicy 변경 control에 traceability로 연결해 기록함"
      ]
    },
    "answer": 3,
    "explain": {
      "en": "Traceability shows which RBAC or NetworkPolicy control addresses the cross-namespace threat and where residual risk remains.",
      "ko": "traceability는 어떤 RBAC 또는 NetworkPolicy control이 cross-namespace threat를 다루는지와 residual risk 위치를 보여줍니다."
    },
    "ref": "https://owasp.org/www-community/Threat_Modeling"
  },
  {
    "id": "local-424",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Supply-chain evidence chain · 자체 연습",
    "difficulty": "medium",
    "style": "exam",
    "q": {
      "en": "For a Kubernetes production image, what should a supply-chain evidence chain connect?",
      "ko": "Kubernetes production image에 대해 supply-chain evidence chain은 무엇을 연결해야 합니까?"
    },
    "choices": {
      "en": [
        "Source or build identity, image digest, approval, and the Deployment reference",
        "Only that the filename is short",
        "That the image was copied manually",
        "That vulnerabilities are impossible"
      ],
      "ko": [
        "source 또는 build identity, image digest, approval과 배포 참조",
        "filename이 짧다는 것만",
        "image가 manual로 copy되었다는 것",
        "vulnerability가 불가능하다는 것"
      ]
    },
    "answer": 0,
    "explain": {
      "en": "The chain links origin and integrity to approval and the exact Kubernetes object that references the artifact without claiming zero risk.",
      "ko": "chain은 zero risk를 주장하지 않고 origin과 integrity를 approval 및 artifact를 참조하는 정확한 Kubernetes object에 연결합니다."
    },
    "ref": "https://slsa.dev/spec/v1.2/"
  },
  {
    "id": "local-425",
    "exam": "kcsa",
    "domain": "Compliance and Security Frameworks",
    "subtopic": "Automation findings · 자체 연습",
    "difficulty": "easy",
    "style": "exam",
    "q": {
      "en": "A policy scanner finds a privileged container in a Deployment. Which automation output is most useful for remediation?",
      "ko": "policy scanner가 Deployment에서 privileged container를 발견했습니다. 어떤 automation output이 remediation에 가장 유용합니까?"
    },
    "choices": {
      "en": [
        "A boolean with no context",
        "The failed rule, Deployment and namespace, severity, manifest evidence, and suggested next action",
        "A deleted report",
        "A permanent bypass command"
      ],
      "ko": [
        "context 없는 boolean",
        "failed rule, Deployment와 namespace, severity, manifest evidence와 suggested next action",
        "삭제된 report",
        "영구 bypass command"
      ]
    },
    "answer": 1,
    "explain": {
      "en": "Actionable output lets the workload owner reproduce the Pod security finding, fix the manifest, and retain audit context.",
      "ko": "actionable output은 workload owner가 Pod 보안 finding을 재현하고 manifest를 수정하며 audit context를 보존하게 합니다."
    },
    "ref": "https://kubernetes.io/docs/concepts/security/pod-security-standards/"
  }
];
