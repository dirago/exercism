class HelloWorld
    def self.hello(nom=nil)
        @nom = nom
        if nom
            return "Hello, #{@nom}!"
        else
            return "Hello, World!"
        end
    end
end
